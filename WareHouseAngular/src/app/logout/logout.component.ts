import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/service-authentication/authentication.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(["/"]);
  }

}
