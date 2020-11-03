import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DockingStation } from 'src/app/pcObjects/dockingStation/docking-station';

@Component({
  selector: 'app-form-docking-station',
  templateUrl: './form-docking-station.component.html',
  styleUrls: ['./form-docking-station.component.scss']
})
export class FormDockingStationComponent implements OnInit {

  @Input() dockingStation: DockingStation;
  @Output() dockingStationToEmit = new EventEmitter<DockingStation>();

  dockingStationTemp = new DockingStation();

  constructor() { }

  ngOnInit(): void {
  }

  setDockingStation(entity): void {
    this.dockingStationTemp = JSON.parse(JSON.stringify(entity));
  }

  sendDockingStationToParent() {
    this.dockingStationToEmit.emit(this.dockingStation);
  }

}
