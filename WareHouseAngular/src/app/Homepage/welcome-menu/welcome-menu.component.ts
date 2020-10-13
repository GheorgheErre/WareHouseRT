import { Component, OnInit } from '@angular/core';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome-menu',
  templateUrl: './welcome-menu.component.html',
  styleUrls: ['./welcome-menu.component.scss']
})
export class WelcomeMenuComponent implements OnInit {

  faWarehouse = faWarehouse;
  constructor() { }

  ngOnInit(): void {
  }


}
