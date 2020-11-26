import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cellphone } from 'src/app/pcObjects/cellphone/cellphone';

@Component({
  selector: 'app-form-cellphone',
  templateUrl: './form-cellphone.component.html',
  styleUrls: ['./form-cellphone.component.scss']
})
export class FormCellphoneComponent implements OnInit {

  @Output() cellphoneToEmit = new EventEmitter<{product:Cellphone, note:String}>();
  cellphoneTemp = new Cellphone();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setCellphone(entity): void {
    this.cellphoneTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }

  sendCellphoneToParent() {
    this.cellphoneToEmit.emit({product:this.cellphoneTemp, note:this.noteTemp});
  }

}
