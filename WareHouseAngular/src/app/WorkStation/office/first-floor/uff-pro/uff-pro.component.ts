import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff-pro',
  templateUrl: './uff-pro.component.html',
  styleUrls: ['./uff-pro.component.scss']
})
export class UffProComponent extends WorkstationInSession implements  OnInit{

  title="Ufficio Tecnico Erre Pro";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
