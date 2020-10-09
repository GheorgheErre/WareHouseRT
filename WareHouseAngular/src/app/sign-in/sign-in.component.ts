import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/service-authentication/authentication.service';
import { TokenStorageService } from '../service/service-tokenStorage/token-storage.service';
import { User } from '../user';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user = new User();
  msg = '';
  isLoggedIn = false;
  isLoginFailed = false;

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   private authenticationService: AuthenticationService,
   private tokenStorage: TokenStorageService) {   }

   ngOnInit(): void {
  }

 loginUser(){
   this.authenticationService.authenticate(this.user.username, this.user.password).subscribe(
     data => { console.log("data");
     this.tokenStorage.saveToken(data.token);
     this.tokenStorage.saveUser(this.user.username);
     this.isLoginFailed = false;
     this.isLoggedIn = true;
     this.reloadPage();
   },
     error => {console.log("exception occurred");
             this.msg = "Bad credentials, please enter valid username and password";
             this.isLoginFailed = true;
 }
   )
}

reloadPage() {
  window.location.reload();
}

}
