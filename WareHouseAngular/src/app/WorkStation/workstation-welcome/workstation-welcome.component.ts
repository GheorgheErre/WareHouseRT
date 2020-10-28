import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'workstation-welcome',
  templateUrl: './workstation-welcome.component.html',
  styleUrls: ['./workstation-welcome.component.scss']
})
export class WorkstationWelcomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOffice(){
    this.router.navigate(["/Ufficio1GroundFloor"]);
  }

  create(){
    this.router.navigate(["/CreateWorkstation"]);
  }
}
