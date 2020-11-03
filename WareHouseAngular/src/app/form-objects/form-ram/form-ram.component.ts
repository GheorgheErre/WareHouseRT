import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ram } from 'src/app/pcObjects/ram/ram';

@Component({
  selector: 'app-form-ram',
  templateUrl: './form-ram.component.html',
  styleUrls: ['./form-ram.component.scss']
})
export class FormRamComponent implements OnInit {

  @Input() ram: Ram;
  @Output() ramToEmit = new EventEmitter<Ram>();
  ramTemp=new Ram();

  constructor() { }

  ngOnInit(): void {
  }
  setRam(entity): void {
    this.ramTemp = JSON.parse(JSON.stringify(entity));
  }
  sendRamToParent() {
    this.ramToEmit.emit(this.ram);
  }
}
