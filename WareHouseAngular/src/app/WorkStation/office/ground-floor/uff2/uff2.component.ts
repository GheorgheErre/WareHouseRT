import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff2',
  templateUrl: './uff2.component.html',
  styleUrls: ['./uff2.component.scss']
})
export class Uff2Component extends WorkstationInSession implements OnInit {

  title = "Ufficio tecnico 2";

  constructor() {
    super();
  }

  ngOnInit(): void {


  }


}
