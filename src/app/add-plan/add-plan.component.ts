import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from '../services/plan.service';
import { Plan } from '../model/plan.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeviceService } from '../services/device.service';
import { SummaryService } from '../services/summary.service';
import { Userplandevice } from '../model/userplandevice.model';
import { Userplan } from '../model/userplan.model';
import { UserplandeviceService } from '../services/userplandevice.service';
import { UserplanService } from '../services/userplan.service';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  deviceArray: any = [];
  devicesGrp: FormGroup = this.fb.group({
  });
  tempArray: any = [];
  userPlanDeviceArray: Userplandevice = new Userplandevice(0, 0, 0, "");
  usersPlansArray: Userplan = new Userplan(0, 0);
  selectedPlanId!: number;
  selected: any = 0;
  disabledVar1: boolean = false;
  disabledVar2: boolean = true;
  plan!: Plan[];
  user!: User;

  constructor(private userService: UserService,private userPlan: UserplanService, private planService: PlanService, private userPlanDevice: UserplandeviceService, private summaryService: SummaryService, private deviceService: DeviceService, private fb: FormBuilder, private router: Router, private activeRoute: ActivatedRoute,) {
    this.user = this.userService.userValue;
  }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(id => {
      this.planService.getAllPlans().subscribe(allPlanData => {
        this.planService.getAllPlansByUserID(this.user.id).subscribe(userPlanData => {
          if (userPlanData.length != 0 && allPlanData.length != 0) {
            var tempAry: any = [];
            userPlanData.forEach(item => tempAry.push(item.id));
            this.plan = allPlanData.filter(item => tempAry.indexOf(item.id) < 0);
          }
          else {
            this.plan = allPlanData;
          }
        });
      });
    });

    this.deviceService.getAllDevices().subscribe(deviceData => {
      if (deviceData.length != 0) {
        this.deviceArray = deviceData;
        this.deviceArray.forEach((item: any) => {
          this.devicesGrp.addControl(item.id, new FormControl(false));
          this.devicesGrp.addControl("text" + item.id, new FormControl({ value: '', disabled: true }));
        });
      }
      else {
        this.deviceArray = [];
      }
    });
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  getPlanId(plan: Plan) {
    this.disabledVar1 = true;
    this.disabledVar2 = false;
    this.selectedPlanId = plan.id;
  }

  getBackBtn(): void {
    this.disabledVar1 = false;
    this.disabledVar2 = true;
    this.devicesGrp.reset();
  }

  async save() {
    console.log(this.devicesGrp.value);
    console.log(this.plan);
    console.log(this.deviceArray);
    this.tempArray = [];
    var newTemp = this.devicesGrp.value;
    var duplicatedValue: boolean = false;
    var deviceLimitFlag: boolean = false;
    for (const key in newTemp) {
      if (newTemp[key] && key.startsWith('text') == false) {
        this.tempArray.push({
          userId: this.user.id, planId: this.selectedPlanId, deviceId: parseInt(key, 10),
          phoneNumber: this.devicesGrp.get('text' + key)?.value
        });
      }
    }
    console.log(this.tempArray);
    this.plan.forEach(planItem => {
      if (planItem.deviceLimit != this.tempArray.length && planItem.id == this.tempArray[0].planId) {
        deviceLimitFlag = true;
        return;
      }
    });
    if (deviceLimitFlag != false) {
      alert("Device Limit is " + this.plan[0].deviceLimit);
    } else {
      if (this.tempArray.length != 0) {
        this.tempArray.forEach((element: any) => {
          this.tempArray.forEach((elementItem: any) => {
            if (element.phoneNumber == elementItem.phoneNumber && element.deviceId != elementItem.deviceId) {
              duplicatedValue = true;
              return;
            }
          });
        });
      }
    }
    var cnt: number = 0;
    if (this.tempArray.lenght != 0 && deviceLimitFlag == false) {
      if (duplicatedValue != false) {
        alert("Please select Unique values");
      }
      else {
        this.usersPlansArray.userId = this.tempArray[0].userId;
        this.usersPlansArray.planId = this.tempArray[0].planId;
        this.userPlan.postUserPlanData(this.usersPlansArray).subscribe(data => {
          this.tempArray.forEach((element: any) => {
            this.userPlanDeviceArray.userId = element.userId;
            this.userPlanDeviceArray.planId = element.planId;
            this.userPlanDeviceArray.deviceId = element.deviceId;
            this.userPlanDeviceArray.phoneNumber = element.phoneNumber.toString();
            this.userPlanDevice.postUserPlanDeviceData(this.userPlanDeviceArray).subscribe(async data => {
              await console.log("Added : " + data);
              cnt++;
              if (cnt == this.tempArray.length) {
                console.log(cnt);
                let route = this.router.config.find(r => r.path === 'accountsummary');
                if (route) {
                  this.router.navigate(['/accountsummary']);
                }
              }
            });
          });
        });
      }
    }

  }

  onCheckboxChange(e: any, itemData: any) {
    if (e.checked) {
      itemData['disabled'] = false;
      this.devicesGrp.get("text" + itemData.id)?.enable();
    }
    else {
      itemData['disabled'] = true;
      this.devicesGrp.get("text" + itemData.id)?.setValue('');
      this.devicesGrp.get("text" + itemData.id)?.disable();
    }
  }
}
