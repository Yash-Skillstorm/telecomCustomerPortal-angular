import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../model/plan.model';
import { Summary } from '../model/summary.model';
import { User } from '../model/user.model';
import { PlanService } from '../services/plan.service';
import { SummaryService } from '../services/summary.service';
import { UserService } from '../services/user.service';
import { UserplanService } from '../services/userplan.service';
import { UserplandeviceService } from '../services/userplandevice.service';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {

  @Input() Array: any;

  user!: User;
  plans!: Plan[];
  deviceArray: Array<any> = [];
  summaryArray: Summary[] = [];
  price: number = 0;
  deleteFlag1: boolean = false;
  deleteFlag2: boolean = false;
  constructor(private userPlan: UserplanService, private planService: PlanService, 
    private userPlanDevice: UserplandeviceService, private summaryService: SummaryService,
    private userService:UserService,private router: Router, private activeRoute: ActivatedRoute) {
      this.user = this.userService.userValue;
     }

  ngOnInit(): void {
    if(this.user.id){
      this.summaryService.getPlanDeviceByUserID(this.user.id).subscribe(data => {        
        this.planService.getAllPlans().subscribe(planData => {
          console.log(data)
          console.log(planData)
          planData.map(planitem => {
            let filterdata = data.filter(item => {
              return item.planName == planitem.planName
            });            
            if (filterdata.length != 0) {
              this.deviceArray.push({
                userId: this.user.id, planId: planitem.id, planName: planitem.planName, device: filterdata, deviceLimit: planitem.deviceLimit, price: planitem.price
              });
              this.price += planitem.price;
            }
          });
          this.summaryArray = this.deviceArray;
          console.log(this.deviceArray)
        });
      });
    }
    else{

    }     
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  delectDevice(e: any): void {
    if (e.length != 0) {
      this.userPlanDevice.getAllUserPlanDeviceData().subscribe(data => {
        if (data.length != 0) {
          data.forEach(async item => {
            if (item.userId == this.user.id && item.planId == e.planId && item.deviceId == e.deviceId) {
              console.log(item);
              this.userPlanDevice.deleteUserPlanDeviceData(item.id).subscribe(data => {
                this.navigatePage();
              });
            }
          });
        }
      });
    }

  }

  deletePlan(e: any): void {
    this.deleteFlag1 = false;
    this.deleteFlag2 = false;
    if (e.length != 0) {
      this.userPlanDevice.getAllUserPlanDeviceData().subscribe(data => {
        if (data.length != 0) {
          data.forEach(async item => {
            if (item.userId == this.user.id && item.planId == e.planId) {
              console.log(item);
              this.userPlanDevice.deleteUserPlanDeviceData(item.id).subscribe(data => {
                this.deleteFlag2 = true;
                this.deleteUserPlan(e);
              });
            }
          })
        }
      });
    }
  }
  deleteUserPlan(dataItem: any): void {
    this.userPlan.getAllUserPlanData().subscribe(data => {
      if (data.length != 0) {
        data.forEach(item => {
          if (item.userId == this.user.id && item.planId == dataItem.planId) {
            console.log(item);
            this.userPlan.deleteUserPlanData(item.id).subscribe(data => {
              this.deleteFlag1 = true;
              if (this.deleteFlag1 && this.deleteFlag2) {
                this.navigatePage();
              }
            });
          }
        })
      }
    });
  }

  navigatePage(): void {
    location.reload();
  }
}
