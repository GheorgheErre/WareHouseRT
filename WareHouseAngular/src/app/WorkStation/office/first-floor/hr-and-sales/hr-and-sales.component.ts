import { Component, OnInit } from '@angular/core';
import { WorkstationInSession } from 'src/app/WorkStation/workstation-in-session';

@Component({
  selector: 'app-hr-and-sales',
  templateUrl: './hr-and-sales.component.html',
  styleUrls: ['./hr-and-sales.component.scss']
})
export class HrAndSalesComponent extends WorkstationInSession implements  OnInit{

  title="HR & Sales Erre Technology Group";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
