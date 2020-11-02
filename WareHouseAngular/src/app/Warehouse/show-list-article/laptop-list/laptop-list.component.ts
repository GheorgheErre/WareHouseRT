import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/pcObjects/laptop/laptop';
import { LaptopService } from 'src/app/service/service-laptop/laptop-service.service';
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

  onUpdateButton(entity: Laptop) {
    this.entity = entity;
  }



}
