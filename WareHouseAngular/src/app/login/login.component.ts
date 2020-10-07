import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthenticationService } from '../service/service-authentication/authentication.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { faTimes, } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { TokenStorageService } from '../service/service-tokenStorage/token-storage.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faTimes = faTimes; /*icona che chiude la sidenav*/
  faGoogle = faGoogle;
  
  user = new User();
  msg = '';
  isLoggedIn = false;
  isLoginFailed = false;

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   private authenticationService: AuthenticationService,
   private tokenStorage: TokenStorageService) {   }

 loginUser(){
   this.authenticationService.authenticate(this.user.username, this.user.password).subscribe(
     data =>{ console.log("response recieved");
     this.tokenStorage.saveToken(data.token);
     //this.tokenStorage.saveUser(data);
     this.isLoginFailed = false;
     this.isLoggedIn = true;
     this.router.navigate(["/"])
   },
     error => {console.log("exception occurred");
             this.msg = "Bad credentials, please enter valid username and password";
             this.isLoginFailed = true;
 }
   )
}

}
