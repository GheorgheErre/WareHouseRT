import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthenticationService } from '../service/service-authentication/authentication.service';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../service/service-registration/registration.service';
import { User } from '../user';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 /* username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  */

   user = new User();
   msg = '';

  constructor(private service : RegistrationService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {   }

 /*handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe(result=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/home']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });      
  }*/

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data =>{ console.log("response recieved");
      this.router.navigate(["/loginsuccess"])
    },
      error => {console.log("exception occurred");
              this.msg = "Bad credentials, please enter valid username and password";
  }
    )
}


}
