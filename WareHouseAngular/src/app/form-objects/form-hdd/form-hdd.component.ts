import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hdd } from 'src/app/pcObjects/hdd/hdd';

@Component({
  selector: 'app-form-hdd',
  templateUrl: './form-hdd.component.html',
  styleUrls: ['./form-hdd.component.scss']
})
export class FormHddComponent implements OnInit {

  @Output() hddToEmit = new EventEmitter<Hdd>();

  hddTemp = new Hdd();

  constructor() { }

  ngOnInit(): void {
  }

  setHdd(entity): void {
    this.hddTemp = JSON.parse(JSON.stringify(entity));
  }

  sendHddToParent() {
    this.hddToEmit.emit(this.hddTemp);
}

}
