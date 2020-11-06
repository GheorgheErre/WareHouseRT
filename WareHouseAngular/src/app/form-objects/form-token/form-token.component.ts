import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Token } from 'src/app/pcObjects/token/token';

@Component({
  selector: 'app-form-token',
  templateUrl: './form-token.component.html',
  styleUrls: ['./form-token.component.scss']
})
export class FormTokenComponent implements OnInit {

  @Output() tokenToEmit = new EventEmitter<Token>();
  tokenTemp = new Token();
  constructor() { }

  ngOnInit(): void {
  }

  setToken(entity): void {
    this.tokenTemp = JSON.parse(JSON.stringify(entity));
  }
  sendTokenToParent() {
    this.tokenToEmit.emit(this.tokenTemp);
  }
}
