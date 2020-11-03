import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Keyboard } from 'src/app/pcObjects/keyBoard/key-board';

@Component({
  selector: 'app-form-keyboard',
  templateUrl: './form-keyboard.component.html',
  styleUrls: ['./form-keyboard.component.scss']
})
export class FormKeyboardComponent implements OnInit {

  @Input() keyboard : Keyboard;
  @Output() keyboardToEmit = new EventEmitter<Keyboard>();

  constructor() {
   }

  ngOnInit(): void {
  }

  sendKeyboardToParent() {
    this.keyboardToEmit.emit(this.keyboard);
}

}
