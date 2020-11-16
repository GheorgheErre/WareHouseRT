import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Monitor } from 'src/app/pcObjects/monitor/monitor';

@Component({
  selector: 'app-form-monitor',
  templateUrl: './form-monitor.component.html',
  styleUrls: ['./form-monitor.component.scss']
})
export class FormMonitorComponent implements OnInit {

  @Output() monitorToEmit = new EventEmitter<{product:Monitor, note:String}>();
  monitorTemp = new Monitor();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setMonitor(entity): void {
    this.monitorTemp = JSON.parse(JSON.stringify(entity));
  }
  sendMonitorToParent() {
    this.monitorToEmit.emit({product:this.monitorTemp, note:this.noteTemp});
}

}
