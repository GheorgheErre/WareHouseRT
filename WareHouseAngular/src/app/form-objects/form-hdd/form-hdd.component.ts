import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hdd } from 'src/app/pcObjects/hdd/hdd';

@Component({
  selector: 'app-form-hdd',
  templateUrl: './form-hdd.component.html',
  styleUrls: ['./form-hdd.component.scss']
})
export class FormHddComponent implements OnInit {

  @Output() hddToEmit = new EventEmitter<{product:Hdd, note:String}>();
  hddTemp = new Hdd();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setHdd(entity): void {
    this.hddTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }

  sendHddToParent() {
    this.hddToEmit.emit({product:this.hddTemp, note:this.noteTemp});
}

}
