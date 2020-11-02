import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Ssd } from 'src/app/pcObjects/ssd/ssd';

@Component({
  selector: 'app-form-ssd',
  templateUrl: './form-ssd.component.html',
  styleUrls: ['./form-ssd.component.scss']
})
export class FormSsdComponent implements OnInit {
  @Input() ssd : Ssd 
  @Output() ssdToEmit = new EventEmitter<Ssd>();
  constructor() { }

  ngOnInit(): void {
  }
  sendSsdToParent() {
    this.ssdToEmit.emit(this.ssd);
}

}
