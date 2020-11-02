import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-uff-lab',
  templateUrl: './uff-lab.component.html',
  styleUrls: ['./uff-lab.component.scss']
})
export class UffLabComponent extends WorkstationInSession implements OnInit {

  title = "Ufficio Tecnico Erre Lab";
  workstationInSession="uff_errelab_1f";
  coords = ["82,50 112,50 111,110 83,110 82,92 66,92 67,77 82,77  ",
    "141,50 142,77 160,77 160,93 142,92 142,110 112,109 112,50 ",
    "82,168 112,169 111,110 83,110 82,129 67,128 67,144 82,145 ",
    "141,168 141,144 159,144 160,129 142,129 142,110 112,109 112,168 "]

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
