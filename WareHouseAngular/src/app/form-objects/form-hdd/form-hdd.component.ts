import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hdd } from 'src/app/pcObjects/hdd/hdd';

@Component({
  selector: 'app-form-hdd',
  templateUrl: './form-hdd.component.html',
  styleUrls: ['./form-hdd.component.scss']
})
export class FormHddComponent implements OnInit {

  @Input() hdd : Hdd;
  @Output() hddToEmit = new EventEmitter<Hdd>();

  constructor() { }

  ngOnInit(): void {
  }

  sendHddToParent() {
    this.hddToEmit.emit(this.hdd);
}

}
