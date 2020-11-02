import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cable } from 'src/app/pcObjects/cable/cable';

@Component({
  selector: 'app-form-cable',
  templateUrl: './form-cable.component.html',
  styleUrls: ['./form-cable.component.scss']
})
export class FormCableComponent implements OnInit {

  cable : Cable = new Cable();
  @Output() cableToEmit = new EventEmitter<Cable>();


  constructor() { }

  ngOnInit(): void {
  }

  sendCableToParent() {
    this.cableToEmit.emit(this.cable);
}

}
