import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OperativeSystem } from 'src/app/pcObjects/operativeSystem/operative-system';

@Component({
  selector: 'app-form-operative-system',
  templateUrl: './form-operative-system.component.html',
  styleUrls: ['./form-operative-system.component.scss']
})
export class FormOperativeSystemComponent implements OnInit {

  @Output() operativeSystemToEmit = new EventEmitter<{product:OperativeSystem, note:String}>();
  operativeSystemTemp = new OperativeSystem();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setOperativeSystem(entity): void {
    this.operativeSystemTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }
  sendOperativeSystemToParent() {
    this.operativeSystemToEmit.emit({product:this.operativeSystemTemp, note:this.noteTemp});
}
}
