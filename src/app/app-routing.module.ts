import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
