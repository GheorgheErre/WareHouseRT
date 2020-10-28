import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-lab',
  templateUrl: './dir-erre-lab.component.html',
  styleUrls: ['./dir-erre-lab.component.scss']
})
export class DirErreLabComponent extends WorkstationInSession implements  OnInit{

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
