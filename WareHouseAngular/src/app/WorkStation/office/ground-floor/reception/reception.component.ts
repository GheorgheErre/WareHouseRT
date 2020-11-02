import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent extends WorkstationInSession implements OnInit {

  title="Reception";
  workstationInSession = "reception";
  coords= ["58,85 87,85 88,108 103,108 103,124 88,123 88,144 58,144 "];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
