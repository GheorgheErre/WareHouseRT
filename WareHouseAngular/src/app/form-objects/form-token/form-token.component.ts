import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Token } from 'src/app/pcObjects/token/token';

@Component({
  selector: 'app-form-token',
  templateUrl: './form-token.component.html',
  styleUrls: ['./form-token.component.scss']
})
export class FormTokenComponent implements OnInit {

  @Output() tokenToEmit = new EventEmitter<{product:Token, note:String}>();
  tokenTemp = new Token();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setToken(entity): void {
    this.tokenTemp = JSON.parse(JSON.stringify(entity));
  }
  sendTokenToParent() {
    this.tokenToEmit.emit({product:this.tokenTemp, note:this.noteTemp});
  }
}
