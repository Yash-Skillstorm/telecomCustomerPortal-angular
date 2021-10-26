import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: User = new User('', '', '');

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }
  add(): void {
    this.userService.addUser(this.users).subscribe(data => {
      console.log("Added User Id: " + data);
    });
  }
}