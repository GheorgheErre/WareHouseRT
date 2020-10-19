import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/service-authentication/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  loggedIn : boolean;
 
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.loggedIn = this.authenticationService.isUserLoggedIn();
  }



}
