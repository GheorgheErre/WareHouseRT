import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-pro',
  templateUrl: './dir-erre-pro.component.html',
  styleUrls: ['./dir-erre-pro.component.scss']
})
export class DirErreProComponent extends WorkstationInSession implements  OnInit{

  title="Direrzione Erre Pro";
  workstationInSession="dir-erre-pro"
  coords=["52,121 82,121 82,188 52,187 52,157 36,157 37,139 52,139"]

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
