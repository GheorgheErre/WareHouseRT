import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-pro',
  templateUrl: './dir-erre-pro.component.html',
  styleUrls: ['./dir-erre-pro.component.scss']
})
export class DirErreProComponent extends WorkstationInSession implements  OnInit{

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
