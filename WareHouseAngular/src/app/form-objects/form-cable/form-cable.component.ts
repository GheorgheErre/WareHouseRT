import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cable } from 'src/app/pcObjects/cable/cable';

@Component({
  selector: 'app-form-cable',
  templateUrl: './form-cable.component.html',
  styleUrls: ['./form-cable.component.scss']
})
export class FormCableComponent implements OnInit {

  @Output() cableToEmit = new EventEmitter<{product:Cable, note:String}>();
  cableTemp = new Cable();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setCable(entity): void {
    this.cableTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }

  sendCableToParent() {
    this.cableToEmit.emit({product:this.cableTemp, note:this.noteTemp});
}

}
