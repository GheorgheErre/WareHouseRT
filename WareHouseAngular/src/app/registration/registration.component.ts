import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/service-registration/registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = '';

 constructor(private service : RegistrationService,
   private router: Router,) {   }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recevied");
        this.router.navigate([""])
      },
      error =>{
        console.log("exception occurred");
        this.msg = error.error;
      }
    )
  }

}
