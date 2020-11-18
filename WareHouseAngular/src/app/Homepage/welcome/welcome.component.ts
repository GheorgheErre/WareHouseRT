import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/service-authentication/authentication.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger(
      'openLogin', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ height: 0, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 0, opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class WelcomeComponent implements OnInit {

  loggedIn : boolean;
  login = false;
  openLogin(){
    this.login = true;
  }
 
  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.loggedIn = this.authenticationService.isUserLoggedIn();
  }



}
