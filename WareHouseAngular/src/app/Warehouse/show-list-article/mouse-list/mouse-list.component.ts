import { Component, OnInit } from '@angular/core';
import { Mouse } from 'src/app/pcObjects/mouse/mouse';
import { MouseService } from 'src/app/service/service-mouse/mouse-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-mouse-list',
  templateUrl: './mouse-list.component.html',
  styleUrls: ['./mouse-list.component.scss']
})
export class MouseListComponent extends ProductList implements OnInit {

  constructor(private mouseService: MouseService) {
    super(mouseService);
    this.entity = new Mouse()
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Mouse) {
    this.entity = entity;
  }

  onAddArticleButton() {
    this.entity = new Mouse();
  }
}

