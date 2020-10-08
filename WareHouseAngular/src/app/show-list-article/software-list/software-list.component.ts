import { Component, OnInit } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.scss']
})
export class SoftwareListComponent extends ProductList implements OnInit {

  constructor(private  softwareService:  SoftwareService) {
    super(softwareService);}

 
    ngOnInit(): void {
      this.findAllProduct();
    }
  

}
