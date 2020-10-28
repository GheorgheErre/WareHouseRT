import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uff2',
  templateUrl: './uff2.component.html',
  styleUrls: ['./uff2.component.scss']
})
export class Uff2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setWorkstationInSession(ufficio, numero){
    window.sessionStorage.setItem("ufficio_workstation", ufficio);
    window.sessionStorage.setItem("numero_workstation", numero);
  }
}
