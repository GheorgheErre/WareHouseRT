import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Software } from 'src/app/pcObjects/software/software';

@Component({
  selector: 'app-form-software',
  templateUrl: './form-software.component.html',
  styleUrls: ['./form-software.component.scss']
})
export class FormSoftwareComponent implements OnInit {
  @Input() software : Software 
  @Output() softwareToEmit = new EventEmitter<Software>();

  constructor() { }

  ngOnInit(): void {
  }
  sendSoftwareToParent() {
    this.softwareToEmit.emit(this.software);
}

}
