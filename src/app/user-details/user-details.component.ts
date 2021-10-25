import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  //user: User | undefined;
  user: User = new User('','','');
  
  constructor(private userService: UserService, private route: ActivatedRoute) { 
    
  }
  


  ngOnInit(): void {
    /*this.userService.find().subscribe(data => {      
      this.UserList = data;
        console.log(this.UserList);
        */
       //this.user.email
      //this.getUser();
      
  }


  getUser(): void {
    /*const email = JSON.parse(this.route.snapshot.paramMap.get('email') || '{}');
    this.userService.getUser(email)
      .subscribe(user => this.user = user); */
      console.log(this.user);
    
  }

}

