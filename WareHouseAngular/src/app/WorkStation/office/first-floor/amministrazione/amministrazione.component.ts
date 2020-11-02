import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-amministrazione',
  templateUrl: './amministrazione.component.html',
  styleUrls: ['./amministrazione.component.scss']
})
export class AmministrazioneComponent extends WorkstationInSession implements  OnInit{

  title="Amministrazione";
  workstationInSession="amministrazione"
  coords = [
    "59,45 89,45 90,104 31,105 31,83 49,83 37,73 50,61 59,70",
    "130,45 130,104 190,105 189,83 172,82 182,73 172,61 161,72 160,45",
    "264,83 264,103 190,104 189,82 221,82 222,66 239,67 239,82 "
  ];

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
