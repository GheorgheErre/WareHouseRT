import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-power-supplie-list',
  templateUrl: './power-supplie-list.component.html',
  styleUrls: ['./power-supplie-list.component.scss']
})
export class PowerSupplieListComponent extends ProductList implements OnInit {

  constructor(private monitorService: MonitorService) {
    super(monitorService);}

  ngOnInit(): void {
    this.findAllProduct();
  }

}
