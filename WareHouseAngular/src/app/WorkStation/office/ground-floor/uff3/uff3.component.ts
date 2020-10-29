import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff3',
  templateUrl: './uff3.component.html',
  styleUrls: ['./uff3.component.scss']
})
export class Uff3Component extends WorkstationInSession implements OnInit {

  title="Ufficio tecnico Erre Ges";
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
