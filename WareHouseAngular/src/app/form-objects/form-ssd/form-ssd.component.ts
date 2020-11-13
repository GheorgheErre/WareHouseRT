import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Ssd } from 'src/app/pcObjects/ssd/ssd';

@Component({
  selector: 'app-form-ssd',
  templateUrl: './form-ssd.component.html',
  styleUrls: ['./form-ssd.component.scss']
})
export class FormSsdComponent implements OnInit {
 
  @Output() ssdToEmit = new EventEmitter<{product:Ssd, note:String}>();
  ssdTemp = new Ssd();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }
  setSsd(entity): void {
    this.ssdTemp = JSON.parse(JSON.stringify(entity));
  }
  sendSsdToParent() {
    this.ssdToEmit.emit({product:this.ssdTemp, note:this.noteTemp});
  }

}
