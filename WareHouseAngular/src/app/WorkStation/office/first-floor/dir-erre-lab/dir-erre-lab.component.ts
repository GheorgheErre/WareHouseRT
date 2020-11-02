import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-lab',
  templateUrl: './dir-erre-lab.component.html',
  styleUrls: ['./dir-erre-lab.component.scss']
})
export class DirErreLabComponent extends WorkstationInSession implements  OnInit{
  title="Direzione Erre Lab";
  workstationInSession = "dir-erre-lab";
  coords=["36,108 102,109 102,138 78,138 78,155 63,154 63,139 35,139"];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
