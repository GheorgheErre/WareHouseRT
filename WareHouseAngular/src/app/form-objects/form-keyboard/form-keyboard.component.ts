import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Keyboard } from 'src/app/pcObjects/keyBoard/key-board';

@Component({
  selector: 'app-form-keyboard',
  templateUrl: './form-keyboard.component.html',
  styleUrls: ['./form-keyboard.component.scss']
})
export class FormKeyboardComponent implements OnInit {

  @Output() keyboardToEmit = new EventEmitter<Keyboard>();

  keyboardTemp = new Keyboard();

  constructor() {
   }

  ngOnInit(): void {
  }

  setKeyboard(entity): void {
    this.keyboardTemp = JSON.parse(JSON.stringify(entity));
  }

  sendKeyboardToParent() {
    this.keyboardToEmit.emit(this.keyboardTemp);
}

}
