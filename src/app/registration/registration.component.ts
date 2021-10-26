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
  profileForm = this.fb.group({
    name: [''],
    email: [''],
    password: ['']
  });

  users: User = new User('','','');

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

  add(name: string, email:string, password: string): void {
    /*
    email = email.trim();
    if (!name) { return; }
    this.userService.addUser({ email, name, password } as User)
      .subscribe((user: User) => {
        this.users.push(user);
      });
      */
       this.users.email = email;
       this.users.name = name;
       this.users.password = password;

        this.userService.addUser(this.users).subscribe(data => {
          console.log("Added User Id: " + data);
  
        });
  

}
}