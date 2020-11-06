import { Component, OnInit, ViewChild } from '@angular/core';
import { FormSsdComponent } from 'src/app/form-objects/form-ssd/form-ssd.component';
import { Ssd } from 'src/app/pcObjects/ssd/ssd';
import { SsdService } from 'src/app/service/service-ssd/ssd.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-ssd-list',
  templateUrl: './ssd-list.component.html',
  styleUrls: ['./ssd-list.component.scss']
})
export class SsdListComponent extends ProductList implements OnInit {

  @ViewChild(FormSsdComponent) formSsdComponent: FormSsdComponent;

  constructor(private ssdService: SsdService, protected workstationService: WorkStationService) {
    super(ssdService, workstationService);
    this.entity = new Ssd()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Ssd) {
    this.entity = entity;
    this.formSsdComponent.setSsd(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Ssd();
  }
}
