import { Component, OnInit } from '@angular/core';
import { Keyboard } from 'src/app/pcObjects/keyBoard/key-board';
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
    this.entity = new Keyboard()
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Keyboard) {
    this.entity = entity;
  }

  onAddArticleButton() {
    this.entity = new Keyboard();
  }
}
