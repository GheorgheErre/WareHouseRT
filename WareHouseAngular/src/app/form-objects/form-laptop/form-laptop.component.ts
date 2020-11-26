import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Laptop } from 'src/app/pcObjects/laptop/laptop';

@Component({
  selector: 'app-form-laptop',
  templateUrl: './form-laptop.component.html',
  styleUrls: ['./form-laptop.component.scss']
})
export class FormLaptopComponent implements OnInit {

  @Output() laptopToEmit = new EventEmitter<{product:Laptop, note:String}>();

  laptopTemp = new Laptop();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {

  }

  setLaptop(entity): void {
    this.laptopTemp = JSON.parse(JSON.stringify(entity));
    this.noteTemp = new String;
  }

  sendLaptopToParent() {
    this.laptopToEmit.emit({product:this.laptopTemp, note:this.noteTemp});
   
  }

  

}