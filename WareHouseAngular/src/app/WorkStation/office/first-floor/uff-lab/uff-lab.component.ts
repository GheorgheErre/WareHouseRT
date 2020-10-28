import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff-lab',
  templateUrl: './uff-lab.component.html',
  styleUrls: ['./uff-lab.component.scss']
})
export class UffLabComponent extends WorkstationInSession implements  OnInit{

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
