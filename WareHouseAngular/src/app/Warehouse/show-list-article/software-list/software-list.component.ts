import { Component, OnInit, ViewChild } from '@angular/core';
import { FormSoftwareComponent } from 'src/app/form-objects/form-software/form-software.component';
import { Software } from 'src/app/pcObjects/software/software';
import { SoftwareService } from 'src/app/service/service-software/software-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.scss']
})
export class SoftwareListComponent extends ProductList implements OnInit {

  @ViewChild(FormSoftwareComponent) formSoftwareComponent: FormSoftwareComponent;

  constructor(private softwareService: SoftwareService, protected workstationService: WorkStationService) {
    super(softwareService, workstationService);
    this.entity = new Software()
  }


  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Software) {
    this.entity = entity;
    this.formSoftwareComponent.setSoftware(this.entity);

  }

  onAddArticleButton() {
    this.entity = new Software();
  }
}
