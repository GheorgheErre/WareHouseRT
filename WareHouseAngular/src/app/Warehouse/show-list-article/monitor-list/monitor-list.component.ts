import { Component, OnInit, ViewChild } from '@angular/core';
import { FormMonitorComponent } from 'src/app/form-objects/form-monitor/form-monitor.component';
import { Monitor } from 'src/app/pcObjects/monitor/monitor';
import { MonitorService } from 'src/app/service/service-monitor/monitor-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})
export class MonitorListComponent extends ProductList implements OnInit {

  @ViewChild(FormMonitorComponent) formMonitor: FormMonitorComponent;

  constructor(private monitorService: MonitorService, protected workstationService: WorkStationService) {
    super(monitorService, workstationService);
    this.entity = new Monitor()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Monitor) {
    this.entity = entity;
    this.formMonitor.setMonitor(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Monitor();  
    this.formMonitor.setMonitor(this.entity);
  }
}
