import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path: 'users', component: UserComponent
  // }
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registration', component:RegistrationComponent
  },
  {
    path: 'accountsummary', component:AccountsummaryComponent
  },
  {
    path: 'addPlan', component: AddPlanComponent
  },
  {
    path: 'user-details', component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
