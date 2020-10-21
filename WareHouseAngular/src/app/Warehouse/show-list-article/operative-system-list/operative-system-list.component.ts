import { Component, OnInit } from '@angular/core';
import { OperativeSystem } from 'src/app/pcObjects/operativeSystem/operative-system';
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
    this.entity = new OperativeSystem()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: OperativeSystem) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new OperativeSystem();
    this.update = false;
  }
}
