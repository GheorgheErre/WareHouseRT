import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { PowerSupplieService } from 'src/app/service/service-powerSupplie/power-supplie.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})
export class MonitorListComponent extends ProductList implements OnInit {

  constructor(private  powerSupplieService:  PowerSupplieService) {
    super(powerSupplieService);
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
