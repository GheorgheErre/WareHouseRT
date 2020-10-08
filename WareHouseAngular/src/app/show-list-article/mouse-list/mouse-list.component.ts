import { Component, OnInit } from '@angular/core';
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
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
