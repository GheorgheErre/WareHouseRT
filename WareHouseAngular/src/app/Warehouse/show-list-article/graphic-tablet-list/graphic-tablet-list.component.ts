import { Component, OnInit } from '@angular/core';
import { GraphicTablet } from 'src/app/pcObjects/graficTablet/grafic-tablet';
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
    this.entity = new GraphicTablet();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: GraphicTablet) {
    this.entity = entity;
  }

  onAddArticleButton() {
    this.entity = new GraphicTablet();

  }
}
