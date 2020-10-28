import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-ges',
  templateUrl: './dir-erre-ges.component.html',
  styleUrls: ['./dir-erre-ges.component.scss']
})
export class DirErreGesComponent extends WorkstationInSession implements  OnInit{

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
