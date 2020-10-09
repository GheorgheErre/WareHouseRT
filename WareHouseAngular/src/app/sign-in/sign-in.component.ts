import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/service-authentication/authentication.service';
import { TokenStorageService } from '../service/service-tokenStorage/token-storage.service';
import { User } from '../user';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  faArrowRight = faArrowRight;

  user = new User();
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

 constructor(
   private route: ActivatedRoute,
   private router: Router,
   private authenticationService: AuthenticationService,
   private tokenStorage: TokenStorageService) {   }

   ngOnInit(): void {
     if(this.tokenStorage.getToken()){
       this.isLoggedIn = true;
       this.roles = this.tokenStorage.getUser().roles;
     }
  }

 loginUser(){
   this.authenticationService.authenticate(this.user.username, this.user.password).subscribe(
     data => { 
     this.tokenStorage.saveToken(data.accessToken);
     this.tokenStorage.saveUser(data);
     this.isLoginFailed = false;
     this.isLoggedIn = true;
     this.roles = this.tokenStorage.getUser().roles;
     //this.router.navigate(['/cpulist']);
     this.reloadPage();
   },
     err => {
              this.errorMessage = err.error.message
             this.isLoginFailed = true;
 }
   )
}

reloadPage() {
  window.location.reload();
}

}
