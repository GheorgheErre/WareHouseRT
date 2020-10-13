import { Component, OnInit } from '@angular/core';
import { KeyboardService } from 'src/app/service/service-keyboard/keyboard-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-keyboard-list',
  templateUrl: './keyboard-list.component.html',
  styleUrls: ['./keyboard-list.component.scss']
})
export class KeyboardListComponent extends ProductList implements OnInit {

  constructor(private keyboardService: KeyboardService) {
    super(keyboardService);
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
