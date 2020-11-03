import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mouse } from 'src/app/pcObjects/mouse/mouse';

@Component({
  selector: 'app-form-mouse',
  templateUrl: './form-mouse.component.html',
  styleUrls: ['./form-mouse.component.scss']
})
export class FormMouseComponent implements OnInit {

  @Input() mouse : Mouse;
  @Output() mouseToEmit = new EventEmitter<Mouse>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMouseToParent() {
    this.mouseToEmit.emit(this.mouse);
}

}
