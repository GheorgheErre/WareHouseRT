import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GraphicTablet } from 'src/app/pcObjects/graficTablet/grafic-tablet';

@Component({
  selector: 'app-form-graphic-tablet',
  templateUrl: './form-graphic-tablet.component.html',
  styleUrls: ['./form-graphic-tablet.component.scss']
})
export class FormGraphicTabletComponent implements OnInit {

  @Output() graphicTabletToEmit = new EventEmitter<{product:GraphicTablet, note:String}>();
  graphicTabletTemp = new GraphicTablet();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }

  setGraphicTablet(entity): void {
    this.graphicTabletTemp = JSON.parse(JSON.stringify(entity));
  }

  sendGraphicTabletToParent() {
    this.graphicTabletToEmit.emit({product:this.graphicTabletTemp, note:this.noteTemp});
  }


}
