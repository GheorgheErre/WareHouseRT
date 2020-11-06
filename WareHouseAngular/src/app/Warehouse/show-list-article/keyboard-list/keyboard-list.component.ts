import { Component, OnInit, ViewChild } from '@angular/core';
import { FormKeyboardComponent } from 'src/app/form-objects/form-keyboard/form-keyboard.component';
import { Keyboard } from 'src/app/pcObjects/keyBoard/key-board';
import { KeyboardService } from 'src/app/service/service-keyboard/keyboard-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-keyboard-list',
  templateUrl: './keyboard-list.component.html',
  styleUrls: ['./keyboard-list.component.scss']
})
export class KeyboardListComponent extends ProductList implements OnInit {

  @ViewChild(FormKeyboardComponent) formKeyboard: FormKeyboardComponent;

  constructor(private keyboardService: KeyboardService, protected workstationService: WorkStationService) {
    super(keyboardService, workstationService);
    this.entity = new Keyboard()
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Keyboard) {
    this.entity = entity;
    this.formKeyboard.setKeyboard(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Keyboard();
  }
}
