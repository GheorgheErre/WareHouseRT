import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Token } from 'src/app/pcObjects/token/token';

@Component({
  selector: 'app-form-token',
  templateUrl: './form-token.component.html',
  styleUrls: ['./form-token.component.scss']
})
export class FormTokenComponent implements OnInit {

  @Input() token : Token; 
  @Output() tokenToEmit = new EventEmitter<Token>();
  constructor() { }

  ngOnInit(): void {
  }

  sendTokenToParent() {
    this.tokenToEmit.emit(this.token);
}
}
