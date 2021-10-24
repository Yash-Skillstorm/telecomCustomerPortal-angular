import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from '../model/plan.model';
import { Summary } from '../model/summary.model';
import { PlanService } from '../services/plan.service';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
  
  @Input() Array: any;

  userId: any;
  plans!: Plan[];
  newArray!: [{ planId: number }] | any;
  public deviceArray: Array<any> = [];
  fakeArray: Summary[] = [];
  headers!: [] | any;
  price: number = 0;
  constructor(private planService: PlanService,private summaryService: SummaryService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activeRoute.data.subscribe(id => {
      //this.userId = id;
      // this.planService.getAllPlansByUserID(this.userId).subscribe(data =>{
      //   this.plans = data;
      //   console.log(data);
      // });
      this.summaryService.getPlanDeviceBuyUserID().subscribe(data => {
        this.planService.getAllPlans().subscribe(planData => {

          planData.map(planitem => {
            let filterdata = data.filter(item => {
              return item.planName == planitem.planName
            })
            
            if(filterdata.length != 0){
              this.deviceArray.push({
                planId: planitem.id, planName: planitem.planName, device: filterdata, deviceLimit: planitem.deviceLimit, price: planitem.price
              });
              this.price += planitem.price;
            }
          });
          this.fakeArray = this.deviceArray;        
          
        });
      });
    });
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
