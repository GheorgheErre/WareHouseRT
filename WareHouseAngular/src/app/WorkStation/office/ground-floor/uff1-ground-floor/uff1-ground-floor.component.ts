import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uff1-ground-floor',
  templateUrl: './uff1-ground-floor.component.html',
  styleUrls: ['./uff1-ground-floor.component.scss']
})
export class Uff1GroundFloorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setWorkstationInSession(ufficio, numero){
    window.sessionStorage.setItem("ufficio_workstation", ufficio);
    window.sessionStorage.setItem("numero_workstation", numero);
  }

}
