import { Component, Input, OnInit } from '@angular/core';
import { WorkstationInSession } from '../workstation-in-session';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends WorkstationInSession implements OnInit {


  @Input() coords: [];
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
