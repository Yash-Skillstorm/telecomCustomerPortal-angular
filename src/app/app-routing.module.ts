import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [  
  {
    path: '', component: LoginComponent
  },
  {
    path: 'registration', component:RegistrationComponent
  },
  {
    path: 'accountsummary', component:AccountsummaryComponent
  },
  {
    path: 'addPlan', component: AddPlanComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
