import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff3',
  templateUrl: './uff3.component.html',
  styleUrls: ['./uff3.component.scss']
})
export class Uff3Component extends WorkstationInSession implements OnInit {

  title = "Ufficio tecnico Erre Ges";
  workstationInSession = "uff_3_gf";
  coords = ["65,72 88,73 88,56 105,55 104,73 125,73 124,103 65,103",
    "184,73 184,102 124,103 124,72 146,72 145,56 162,56 162,72 ",
    "66,132 88,132 88,148 105,149 105,132 124,132 124,103 64,103 ",
    "184,132 184,102 125,103 125,132 147,132 147,148 162,148 162,132 "
  ]
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
