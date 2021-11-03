import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User = new User('', '', '');
  regisFlag : boolean = false;
  siteLanguage: string = 'English';
  siteLocale: string = '';
  languageList = [
    { code: '', label: 'English' },
    { code: 'es', label: 'Spanish' }    
  ];
  constructor(private router: Router,private userService: UserService) {
    if (this.userService.userValue) {
      this.router.navigate(['']);
    }
  }  

  ngOnInit() { 
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.languageList.filter(f => f.code === this.siteLocale)[0].label;
  }

  onSubmit(): void {
    if(!this.users.email || !this.users.password)
    {
    alert("Field Empty");
  }
  else{
    this.regisFlag = false;
    this.userService.login(this.users).subscribe(data => {
      console.log("Checked User Id: " + data);
      if(data != null){
        let route = this.router.config.find(r => r.path === 'accountsummary');
        if (route) {
          this.router.navigate(['/accountsummary']);
        }
      }
      else{
        this.regisFlag = true;
      }
      
    });
  }
}
}
