import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Laptop } from 'src/app/pcObjects/laptop/laptop';

@Component({
  selector: 'app-form-laptop',
  templateUrl: './form-laptop.component.html',
  styleUrls: ['./form-laptop.component.scss']
})
export class FormLaptopComponent implements OnInit {

  laptop : Laptop = new Laptop();
  @Output() laptopToEmit = new EventEmitter<Laptop>();

  constructor() { }

  ngOnInit(): void {
  }

  sendLaptopToParent() {
    this.laptopToEmit.emit(this.laptop);
}



}
