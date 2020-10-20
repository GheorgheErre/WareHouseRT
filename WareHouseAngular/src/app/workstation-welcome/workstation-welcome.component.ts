import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'workstation-welcome',
  templateUrl: './workstation-welcome.component.html',
  styleUrls: ['./workstation-welcome.component.scss']
})
export class WorkstationWelcomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor() { }

  ngOnInit(): void {
  }

}
