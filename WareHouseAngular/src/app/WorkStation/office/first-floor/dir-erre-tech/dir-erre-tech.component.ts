import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-tech',
  templateUrl: './dir-erre-tech.component.html',
  styleUrls: ['./dir-erre-tech.component.scss']
})
export class DirErreTechComponent extends WorkstationInSession implements  OnInit{

  title="Direzione Erre Technology";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
