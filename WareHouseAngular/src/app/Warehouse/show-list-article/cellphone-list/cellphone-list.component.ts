import { Component, OnInit } from '@angular/core';
import { Cellphone } from 'src/app/pcObjects/cellphone/cellphone';
import { CellphoneService } from 'src/app/service/service-cellphone/cellphone-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone-list.component.scss']
})
export class CellphoneListComponent extends ProductList implements OnInit {

  //entity: Cellphone = new Cellphone();

  constructor(private cellphoneService: CellphoneService) { 
    super(cellphoneService);
    this.entity = new Cellphone();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Cellphone) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Cellphone();
    this.update = false;
  }
}
