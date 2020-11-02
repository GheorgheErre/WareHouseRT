import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DockingStation } from 'src/app/pcObjects/dockingStation/docking-station';

@Component({
  selector: 'app-form-docking-station',
  templateUrl: './form-docking-station.component.html',
  styleUrls: ['./form-docking-station.component.scss']
})
export class FormDockingStationComponent implements OnInit {

  @Input() dockingStation : DockingStation;
  @Output() dockingStationToEmit = new EventEmitter<DockingStation>();

  constructor() { }

  ngOnInit(): void {
  }

  sendDockingStationToParent() {
    this.dockingStationToEmit.emit(this.dockingStation);
}

}
