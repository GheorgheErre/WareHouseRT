import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-dir-erre-ges',
  templateUrl: './dir-erre-ges.component.html',
  styleUrls: ['./dir-erre-ges.component.scss']
})
export class DirErreGesComponent extends WorkstationInSession implements OnInit {
  title = "Direzione Erre Ges";
  workstationInSession="dir-erre-ges";
  coords=["61,49 91,50 91,125 62,125 61,92 45,92 45,76 62,76 "]

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
