import { Component, OnInit } from '@angular/core';
import { PowerSupplieService } from 'src/app/service/service-powerSupplie/power-supplie.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'power-supplie-count',
  templateUrl: './power-supplie-count.component.html',
  styleUrls: ['./power-supplie-count.component.scss']
})
export class PowerSupplieCountComponent extends ProductCount implements OnInit {

  constructor(private powerSupplieService: PowerSupplieService) {
    super(powerSupplieService)
   }

  ngOnInit(): void {
    this.countProduct();
  }

}
