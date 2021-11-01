import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: User = new User('', '', '');

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }
  add(): void {
    if(!this.users.name || !this.users.email || !this.users.password)
    {
    alert("Field Empty");
  }
  else{
    this.userService.addUser(this.users).subscribe(data => {     
      let route = this.router.config.find(r => r.path === '');
      if (route) {
        this.router.navigate(['']);
      }
    });
  }
  }
  
  getBack(): void{
    this.router.navigate(['']);
  }
}