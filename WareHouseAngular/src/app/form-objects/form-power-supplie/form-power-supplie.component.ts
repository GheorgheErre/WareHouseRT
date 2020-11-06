import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Powersupplie } from 'src/app/pcObjects/powerSupplie/powersupplie';

@Component({
  selector: 'app-form-power-supplie',
  templateUrl: './form-power-supplie.component.html',
  styleUrls: ['./form-power-supplie.component.scss']
})
export class FormPowerSupplieComponent implements OnInit {
  
  @Output() powerSupplieToEmit = new EventEmitter<Powersupplie>();
  powerSupplieTemp=new Powersupplie();
  constructor() { }

  ngOnInit(): void {
  }

  setPowerSupplie(entity): void {
    this.powerSupplieTemp = JSON.parse(JSON.stringify(entity));
  }
  sendPowersupplieToParent() {
    this.powerSupplieToEmit.emit(this.powerSupplieTemp);
}
}
