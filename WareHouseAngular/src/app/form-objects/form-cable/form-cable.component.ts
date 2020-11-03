import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cable } from 'src/app/pcObjects/cable/cable';

@Component({
  selector: 'app-form-cable',
  templateUrl: './form-cable.component.html',
  styleUrls: ['./form-cable.component.scss']
})
export class FormCableComponent implements OnInit {

  @Input() cable : Cable;
  @Output() cableToEmit = new EventEmitter<Cable>();

  cableTemp = new Cable();

  constructor() { }

  ngOnInit(): void {
  }

  setCable(entity): void {
    this.cableTemp = JSON.parse(JSON.stringify(entity));
  }

  sendCableToParent() {
    this.cableToEmit.emit(this.cable);
}

}
