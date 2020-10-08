import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/pcObjects/product/product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  protected listProduct: Product[];
  constructor(protected service: ServiceService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(list => {
      this.listProduct=list;
    })
  }

}
