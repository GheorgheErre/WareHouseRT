import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-tech',
  templateUrl: './dir-erre-tech.component.html',
  styleUrls: ['./dir-erre-tech.component.scss']
})
export class DirErreTechComponent extends WorkstationInSession implements  OnInit{

  title="Direzione Erre Technology";
  workstationInSession="dir-erre-tech";
  coords=["119,139 171,191 149,215 125,193 115,203 103,192 113,181 95,163 "];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
