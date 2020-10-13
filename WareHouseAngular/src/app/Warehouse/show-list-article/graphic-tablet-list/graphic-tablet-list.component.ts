import { Component, OnInit } from '@angular/core';
import { GraphicTabletService } from 'src/app/service/service-graphic-tablet/graphic-tablet-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-graphic-tablet-list',
  templateUrl: './graphic-tablet-list.component.html',
  styleUrls: ['./graphic-tablet-list.component.scss']
})
export class GraphicTabletListComponent extends ProductList implements OnInit {

  constructor(private graphicTabletService: GraphicTabletService) {
      super(graphicTabletService);
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
