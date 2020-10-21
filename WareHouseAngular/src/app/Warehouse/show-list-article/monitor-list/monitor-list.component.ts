import { Component, OnInit } from '@angular/core';
import { Monitor } from 'src/app/pcObjects/monitor/monitor';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})
export class MonitorListComponent extends ProductList implements OnInit {

  constructor(private monitorService: MonitorService) {
    super(monitorService);
    this.entity = new Monitor()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Monitor) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Monitor();
    this.update = false;
  }
}
