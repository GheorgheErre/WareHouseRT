import { Component, OnInit, ViewChild } from '@angular/core';
import { FormMouseComponent } from 'src/app/form-objects/form-mouse/form-mouse.component';
import { Mouse } from 'src/app/pcObjects/mouse/mouse';
import { MouseService } from 'src/app/service/service-mouse/mouse-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-mouse-list',
  templateUrl: './mouse-list.component.html',
  styleUrls: ['./mouse-list.component.scss']
})
export class MouseListComponent extends ProductList implements OnInit {

  @ViewChild(FormMouseComponent) formMouse: FormMouseComponent;

  constructor(private mouseService: MouseService) {
    super(mouseService);
    this.entity = new Mouse()
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Mouse) {
    this.entity = entity;
    this.formMouse.setMouse(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Mouse();
  }
}

