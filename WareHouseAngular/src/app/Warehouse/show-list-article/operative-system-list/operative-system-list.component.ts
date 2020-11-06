import { Component, OnInit, ViewChild } from '@angular/core';
import { FormOperativeSystemComponent } from 'src/app/form-objects/form-operative-system/form-operative-system.component';
import { OperativeSystem } from 'src/app/pcObjects/operativeSystem/operative-system';
import { OperativeSystemService } from 'src/app/service/service-operative-system/operative-system-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-operative-system-list',
  templateUrl: './operative-system-list.component.html',
  styleUrls: ['./operative-system-list.component.scss']
})
export class OperativeSystemListComponent extends ProductList implements OnInit {

  @ViewChild(FormOperativeSystemComponent) formOperativeSystem: FormOperativeSystemComponent;

  constructor(private operativeSystemService: OperativeSystemService, protected workstationService: WorkStationService) {
    super(operativeSystemService, workstationService);
    this.entity = new OperativeSystem()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: OperativeSystem) {
    this.entity = entity;
    this.formOperativeSystem.setOperativeSystem(this.entity);

  }

  onAddArticleButton() {
    this.entity = new OperativeSystem();
  }
}
