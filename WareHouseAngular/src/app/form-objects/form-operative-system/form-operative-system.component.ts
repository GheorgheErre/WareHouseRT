import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OperativeSystem } from 'src/app/pcObjects/operativeSystem/operative-system';

@Component({
  selector: 'app-form-operative-system',
  templateUrl: './form-operative-system.component.html',
  styleUrls: ['./form-operative-system.component.scss']
})
export class FormOperativeSystemComponent implements OnInit {

  @Input() operativeSystem : OperativeSystem 
  @Output() operativeSystemToEmit = new EventEmitter<OperativeSystem>();

  constructor() { }

  ngOnInit(): void {
  }

  
  sendOperativeSystemToParent() {
    this.operativeSystemToEmit.emit(this.operativeSystem);
}
}
