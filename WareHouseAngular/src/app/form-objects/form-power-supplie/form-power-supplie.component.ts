import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Powersupplie } from 'src/app/pcObjects/powerSupplie/powersupplie';

@Component({
  selector: 'app-form-power-supplie',
  templateUrl: './form-power-supplie.component.html',
  styleUrls: ['./form-power-supplie.component.scss']
})
export class FormPowerSupplieComponent implements OnInit {
  @Input() powerSupplie : Powersupplie 
  @Output() powerSupplieToEmit = new EventEmitter<Powersupplie>();

  constructor() { }

  ngOnInit(): void {
  }

  
  sendPowersupplieToParent() {
    this.powerSupplieToEmit.emit(this.powerSupplie);
}
}
