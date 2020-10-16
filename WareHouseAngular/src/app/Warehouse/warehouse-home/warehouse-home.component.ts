import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-warehouse-home',
  templateUrl: './warehouse-home.component.html',
  styleUrls: ['./warehouse-home.component.scss']
})
export class WarehouseHomeComponent implements OnInit {

  faPlus = faPlus;
  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}