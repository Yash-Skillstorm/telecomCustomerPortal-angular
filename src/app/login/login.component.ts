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
  
 
  constructor(      
      private router: Router,
      private userService: UserService,

  ) { }

  ngOnInit() {
      
  }



    onSubmit() {
        
        this.userService.getUser(this.users).subscribe(data => {
          console.log("Checked User Id: " + data);
          let route = this.router.config.find(r => r.path === 'accountsummary');
          if (route) {
            this.router.navigate(['/accountsummary']);
          }
        });
    }
}
