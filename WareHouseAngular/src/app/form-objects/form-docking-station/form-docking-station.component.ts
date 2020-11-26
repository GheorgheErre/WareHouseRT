import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DockingStation } from 'src/app/pcObjects/dockingStation/docking-station';

@Component({
  selector: 'app-form-docking-station',
  templateUrl: './form-docking-station.component.html',
  styleUrls: ['./form-docking-station.component.scss']
})
export class FormDockingStationComponent implements OnInit {

  @Output() dockingStationToEmit = new EventEmitter<{product:DockingStation, note:String}>();
  dockingStationTemp = new DockingStation();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setDockingStation(entity): void {
    this.dockingStationTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }

  sendDockingStationToParent() {
    this.dockingStationToEmit.emit({product:this.dockingStationTemp, note:this.noteTemp});
  }

}
