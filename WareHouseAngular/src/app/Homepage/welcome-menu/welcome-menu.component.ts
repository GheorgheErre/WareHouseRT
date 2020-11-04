import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome-menu',
  templateUrl: './welcome-menu.component.html',
  styleUrls: ['./welcome-menu.component.scss']
})
export class WelcomeMenuComponent implements OnInit {

  faArrowRight = faArrowRight;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openWarehouse(){
    this.router.navigate(["/WarehouseHomeCount"])
  }

  openWorkstation(){
    this.router.navigate(["/WorkstationWelcome"])
  }


}
