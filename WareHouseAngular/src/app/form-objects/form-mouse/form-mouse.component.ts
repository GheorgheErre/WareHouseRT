import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mouse } from 'src/app/pcObjects/mouse/mouse';

@Component({
  selector: 'app-form-mouse',
  templateUrl: './form-mouse.component.html',
  styleUrls: ['./form-mouse.component.scss']
})
export class FormMouseComponent implements OnInit {

  @Output() mouseToEmit = new EventEmitter<{product:Mouse, note:String}>();
  mouseTemp = new Mouse();
  noteTemp: String;
  
  constructor() { }

  ngOnInit(): void {
  }
  setMouse(entity): void {
    this.mouseTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }
  sendMouseToParent() {
    this.mouseToEmit.emit({product:this.mouseTemp, note:this.noteTemp});
}

}
