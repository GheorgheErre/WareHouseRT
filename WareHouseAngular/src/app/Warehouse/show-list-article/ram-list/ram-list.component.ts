import { Component, OnInit } from '@angular/core';
import { RamService } from 'src/app/service/service-ram/ram.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-ram-list',
  templateUrl: './ram-list.component.html',
  styleUrls: ['./ram-list.component.scss']
})
export class RamListComponent  extends ProductList implements OnInit {

  constructor(private  ramService:  RamService) {
    super(ramService);}

    ngOnInit(): void {
      this.findAllProduct();
    }
  

}
