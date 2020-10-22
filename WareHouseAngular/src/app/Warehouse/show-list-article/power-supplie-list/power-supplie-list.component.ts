import { Component, OnInit } from '@angular/core';
import { Powersupplie } from 'src/app/pcObjects/powerSupplie/powersupplie';
import { PowerSupplieService } from 'src/app/service/service-powerSupplie/power-supplie.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-power-supplie-list',
  templateUrl: './power-supplie-list.component.html',
  styleUrls: ['./power-supplie-list.component.scss']
})
export class PowerSupplieListComponent extends ProductList implements OnInit {

  constructor(private powerSupplieService: PowerSupplieService) {
    super(powerSupplieService);
    this.entity = new Powersupplie()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: Powersupplie) {
    this.entity = entity;
  }

  onAddArticleButton() {
    this.entity = new Powersupplie();
  }
}
