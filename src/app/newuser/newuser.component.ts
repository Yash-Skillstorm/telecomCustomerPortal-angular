import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  userList: User= new User("","","");
  constructor() { }

  ngOnInit(): void {
  }

  save(): void{
    console.log(this.userList);
  }

}
