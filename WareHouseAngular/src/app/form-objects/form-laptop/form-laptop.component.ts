import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Laptop } from 'src/app/pcObjects/laptop/laptop';

@Component({
  selector: 'app-form-laptop',
  templateUrl: './form-laptop.component.html',
  styleUrls: ['./form-laptop.component.scss']
})
export class FormLaptopComponent implements OnInit {

  @Input() laptop : Laptop;
  @Output() laptopToEmit = new EventEmitter<Laptop>();

  constructor() { }

  ngOnInit(): void {
  }

  sendLaptopToParent() {
    this.laptopToEmit.emit(this.laptop);
}

}
