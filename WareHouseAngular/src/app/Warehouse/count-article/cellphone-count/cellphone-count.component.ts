import { Component, OnInit } from '@angular/core';
import { CellphoneService } from 'src/app/service/service-cellphone/cellphone-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'cellphone-count',
  templateUrl: './cellphone-count.component.html',
  styleUrls: ['./cellphone-count.component.scss']
})
export class CellphoneCountComponent extends ProductCount implements OnInit {

  constructor(private cellphoneService: CellphoneService) { 
    super(cellphoneService);
  }

  ngOnInit(): void {
    this.countProduct();
  }

}
