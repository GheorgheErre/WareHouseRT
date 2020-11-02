import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff1-first-floor',
  templateUrl: './uff1-first-floor.component.html',
  styleUrls: ['./uff1-first-floor.component.scss']
})
export class Uff1FirstFloorComponent extends WorkstationInSession implements OnInit {

  title = "Ufficio 1";
  workstationInSession="uff_1_1f";
  coords = ["71,96 101,96 101,164 71,163 71,131 54,132 54,115 71,115 ",
    "227,96 257,97 257,120 273,119 274,134 257,134 257,164 227,163  "
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
