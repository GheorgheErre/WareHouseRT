import { Component, OnInit } from '@angular/core';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
