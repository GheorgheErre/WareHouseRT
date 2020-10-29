import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-amministrazione',
  templateUrl: './amministrazione.component.html',
  styleUrls: ['./amministrazione.component.scss']
})
export class AmministrazioneComponent extends WorkstationInSession implements  OnInit{

  title="Amministrazione";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
