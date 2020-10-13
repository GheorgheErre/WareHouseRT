import { Component, OnInit } from '@angular/core';
import { HddService } from 'src/app/service/service-hdd/hdd.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-hdd-list',
  templateUrl: './hdd-list.component.html',
  styleUrls: ['./hdd-list.component.scss']
})
export class HddListComponent extends ProductList implements OnInit {

  constructor(private hddService: HddService) {
    super(hddService);
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
