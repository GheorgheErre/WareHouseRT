import { Component, OnInit } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent extends ProductList implements OnInit {

  constructor(private laptopService: LaptopService) {
    super(laptopService);
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
