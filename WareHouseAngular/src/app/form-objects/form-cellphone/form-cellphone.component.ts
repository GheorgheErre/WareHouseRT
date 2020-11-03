import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cellphone } from 'src/app/pcObjects/cellphone/cellphone';

@Component({
  selector: 'app-form-cellphone',
  templateUrl: './form-cellphone.component.html',
  styleUrls: ['./form-cellphone.component.scss']
})
export class FormCellphoneComponent implements OnInit {

  @Input() cellphone;
  @Output() cellphoneToEmit = new EventEmitter<Cellphone>();

  cellphoneTemp = new Cellphone();

  constructor() { }

  ngOnInit(): void {
  }

  setCellphone(entity): void {
    this.cellphoneTemp = JSON.parse(JSON.stringify(entity));
  }

  sendCellphoneToParent() {
    this.cellphoneToEmit.emit(this.cellphone);
  }

}
