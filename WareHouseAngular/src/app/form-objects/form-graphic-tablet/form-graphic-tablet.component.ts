import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GraphicTablet } from 'src/app/pcObjects/graficTablet/grafic-tablet';

@Component({
  selector: 'app-form-graphic-tablet',
  templateUrl: './form-graphic-tablet.component.html',
  styleUrls: ['./form-graphic-tablet.component.scss']
})
export class FormGraphicTabletComponent implements OnInit {

  @Input() graphicTablet : GraphicTablet;
  @Output() graphicTabletToEmit = new EventEmitter<GraphicTablet>();

  constructor() { }

  ngOnInit(): void {
  }

  sendGraphicTabletToParent() {
    this.graphicTabletToEmit.emit(this.graphicTablet);
}


}
