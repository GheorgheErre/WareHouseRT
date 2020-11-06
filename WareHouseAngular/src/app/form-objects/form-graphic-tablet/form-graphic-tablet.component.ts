import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GraphicTablet } from 'src/app/pcObjects/graficTablet/grafic-tablet';

@Component({
  selector: 'app-form-graphic-tablet',
  templateUrl: './form-graphic-tablet.component.html',
  styleUrls: ['./form-graphic-tablet.component.scss']
})
export class FormGraphicTabletComponent implements OnInit {

  @Output() graphicTabletToEmit = new EventEmitter<GraphicTablet>();
  graphicTabletTemp = new GraphicTablet();

  constructor() { }

  ngOnInit(): void {
  }

  setGraphicTablet(entity): void {
    this.graphicTabletTemp = JSON.parse(JSON.stringify(entity));
  }

  sendGraphicTabletToParent() {
    this.graphicTabletToEmit.emit(this.graphicTabletTemp);
  }


}
