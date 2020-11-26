import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Software } from 'src/app/pcObjects/software/software';

@Component({
  selector: 'app-form-software',
  templateUrl: './form-software.component.html',
  styleUrls: ['./form-software.component.scss']
})
export class FormSoftwareComponent implements OnInit {

  @Output() softwareToEmit = new EventEmitter<{product:Software, note:String}>();
  softwareTemp=new Software();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }
  setSoftware(entity): void {
    this.softwareTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }
  sendSoftwareToParent() {
    this.softwareToEmit.emit({product:this.softwareTemp, note:this.noteTemp});
}

}
