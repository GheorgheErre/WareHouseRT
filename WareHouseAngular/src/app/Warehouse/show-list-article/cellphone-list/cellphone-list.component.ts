import { Component, OnInit } from '@angular/core';
import { Cellphone } from 'src/app/pcObjects/cellphone/chellphone';
import { CellphoneService } from 'src/app/service/service-cellphone/cellphone-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone-list.component.scss']
})
export class CellphoneListComponent extends ProductList implements OnInit {



  constructor(private cellphoneService: CellphoneService) { 
    super(cellphoneService);
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
}
