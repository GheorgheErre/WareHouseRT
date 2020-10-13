import { Component, OnInit } from '@angular/core';
import { OperativeSystemService } from 'src/app/service/service-operative-system/operative-system-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-operative-system-list',
  templateUrl: './operative-system-list.component.html',
  styleUrls: ['./operative-system-list.component.scss']
})
export class OperativeSystemListComponent extends ProductList implements OnInit {

  constructor(private operativeSystemService: OperativeSystemService) {
    super(operativeSystemService);
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
