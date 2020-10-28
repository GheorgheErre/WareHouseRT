import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff1-ground-floor',
  templateUrl: './uff1-ground-floor.component.html',
  styleUrls: ['./uff1-ground-floor.component.scss']
})
export class Uff1GroundFloorComponent extends WorkstationInSession implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }



}
