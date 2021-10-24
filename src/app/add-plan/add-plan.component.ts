import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../services/plan.service';
import { Plan } from '../model/plan.model';
import { Target } from '@angular/compiler';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { DeviceService } from '../services/device.service';
import { SummaryService } from '../services/summary.service';
import { Userplandevice } from '../model/userplandevice.model';
@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  
  //DeviceArray: any = [{'Id':'1','Name':'Internet'}, {'Id':'2','Name':'TV'},{'Id':'3','Name':'Mobile'}];
  DeviceArray: any = [];
  devices :FormGroup = this.fb.group({
  });


  renewArray : any = [];
  NewArray: Userplandevice = new Userplandevice(0,0,0,"");

  
  selectedPlanId!: number; 
  selected: any = 0;
  disabledVar1 : boolean = false;
  disabledVar2: boolean = true;
  plan!: Plan[];
  constructor(private planService: PlanService, private summaryService: SummaryService, private deviceService: DeviceService, private fb: FormBuilder,private router: Router, private activeRoute: ActivatedRoute, ) {
   
   }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(id => {
      this.planService.getAllPlans().subscribe(planData => {
         this.planService.getAllPlansByUserID().subscribe(data =>{        
        //console.log(data);
        var tempArray: any = [];
        data.forEach(item => tempArray.push(item.id));
        console.log(tempArray);
        this.plan = planData.filter(item => tempArray.indexOf(item.id) < 0)
       // this.plan = planData;
        //console.log(this.plan);
      });       
      });
    });
    this.deviceService.getAllDevices().subscribe(data =>{
      if(data.length != 0){
        console.log(data);
        this.DeviceArray = data;
        this.DeviceArray.forEach((item: any) => {
          this.devices.addControl(item.id, new FormControl(false));
          this.devices.addControl("text"+item.id, new FormControl({value: '', disabled : true}));
        });
      }
    });
   
  }


  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  getPlanId(plan: Plan){
    this.disabledVar1 = true;
    this.disabledVar2 = false;
    this.selectedPlanId = plan.id;
    console.log(plan.id);
  }
  changeGender(e: Target){
    console.log(e);
  }
  getBack(){
    this.disabledVar1 = false;
    this.disabledVar2 = true;
    this.devices.reset();
  }

  async save(){    
    var newTemp = this.devices.value;
    this.renewArray = [];
    for (const key in newTemp) {
      if (newTemp[key] && key.startsWith('text') == false) {
        this.renewArray.push({userId:2 , planId: this.selectedPlanId , deviceId: parseInt(key, 10), 
          phoneNumber: this.devices.get('text'+key)?.value});        
      }
    }
    //console.log(this.NewArray);
    var duplicatedValue: boolean = false;
    this.renewArray.forEach((element:any) => {
      this.renewArray.forEach((elementItem:any) =>{
          if(element.phoneNumber == elementItem.phoneNumber && element.deviceId != elementItem.deviceId){
            duplicatedValue = true;
            return;
          }
      });
    });
    if(duplicatedValue != false){      
      alert("Please select Unique values");
    }
    else{
      
      console.log(this.renewArray);
      await this.renewArray.forEach(async (element:any) => {
        this.NewArray.userId = element.userId;
        this.NewArray.planId = element.planId;
        this.NewArray.deviceId = element.deviceId;
        this.NewArray.phoneNumber = element.phoneNumber.toString();
        console.log(this.NewArray);
        await this.summaryService.postUserPlanDeviceData(this.NewArray).subscribe(async data =>{
        await console.log("Added : " +data);
      });
      });
      
      
    }
  }

  onCheckboxChange(e : any, itemData: any){
    console.log("onCheckboxChange");
    if(e.checked){
      itemData['disabled'] = false;
      this.devices.get("text"+itemData.id)?.enable();
    }
    else{
      itemData['disabled'] = true;
      this.devices.get("text"+itemData.id)?.setValue('');
      this.devices.get("text"+itemData.id)?.disable();
    }
      
  }
}
