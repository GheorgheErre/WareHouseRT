import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-hr-and-sales',
  templateUrl: './hr-and-sales.component.html',
  styleUrls: ['./hr-and-sales.component.scss']
})
export class HrAndSalesComponent extends WorkstationInSession implements OnInit {

  title = "HR & Sales Erre Technology Group";
  workstationInSession = "hr-and-sales";
  coords = ["35,122 102,123 102,152 80,152 79,168 62,168 62,152 35,152",
    "190,49 220,49 220,108 190,108 190,92 176,92 175,77 190,76 ",
    "220,50 249,50 250,76 267,77 267,92 250,91 249,108 220,108 ",
    "190,167 220,168 220,108 191,108 191,127 176,127 176,143 191,144 ",
    "249,167 249,144 268,144 268,127 249,128 249,109 220,108 220,168 "
  ]

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
