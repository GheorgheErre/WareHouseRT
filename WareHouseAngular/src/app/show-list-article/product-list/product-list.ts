import { OnInit } from '@angular/core';
import { Product } from 'src/app/pcObjects/product/product';
import { ServiceService } from 'src/app/service/service.service';

export abstract class ProductList {
    listProduct: Product[];

  constructor(protected service : ServiceService) { }

  findAllProduct(): void {
    this.service.findAll().subscribe(list =>{
      this.listProduct=list;
    })
  }
}
