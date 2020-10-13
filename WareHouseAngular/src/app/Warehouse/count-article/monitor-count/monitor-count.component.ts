import { Component, OnInit } from '@angular/core';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'monitor-count',
  templateUrl: './monitor-count.component.html',
  styleUrls: ['./monitor-count.component.scss']
})
export class MonitorCountComponent extends ProductCount implements OnInit {

  constructor(private monitorService: MonitorService) {
    super(monitorService)
   }

  ngOnInit(): void {
  this.countProduct();
  }

}
