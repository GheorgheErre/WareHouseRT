import { Component, OnInit } from '@angular/core';
import { KeyboardService } from 'src/app/service/service-keyboard/keyboard-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-keyboard-count',
  templateUrl: './keyboard-count.component.html',
  styleUrls: ['./keyboard-count.component.scss']
})
export class KeyboardCountComponent extends ProductCount implements OnInit {

  constructor(private keyboardService: KeyboardService) { 
    super(keyboardService); }

    ngOnInit(): void {
      this.countProduct();
    }
  
}
