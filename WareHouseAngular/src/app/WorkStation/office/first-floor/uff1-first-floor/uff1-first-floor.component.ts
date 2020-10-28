import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff1-first-floor',
  templateUrl: './uff1-first-floor.component.html',
  styleUrls: ['./uff1-first-floor.component.scss']
})
export class Uff1FirstFloorComponent extends WorkstationInSession implements  OnInit{

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
