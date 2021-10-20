import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserList: User[] = [];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.userService.find().subscribe(data => {      
      this.UserList = data;
        console.log(this.UserList);
    });
  }

}
