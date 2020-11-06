import { Component, OnInit, ViewChild } from '@angular/core';
import { FormDockingStationComponent } from 'src/app/form-objects/form-docking-station/form-docking-station.component';
import { DockingStation } from 'src/app/pcObjects/dockingStation/docking-station';
import { DockingStationService } from 'src/app/service/service-docking-station/docking-station-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-docking-station-list',
  templateUrl: './docking-station-list.component.html',
  styleUrls: ['./docking-station-list.component.scss']
})
export class DockingStationListComponent extends ProductList implements OnInit {

  @ViewChild(FormDockingStationComponent) formDockingStation: FormDockingStationComponent;

  constructor(private dockingStationService: DockingStationService, protected workstationService: WorkStationService) {
    super(dockingStationService, workstationService);
    this.entity = new DockingStation();
  }

  ngOnInit(): void {
    this.findAllProduct();
    this.entity = new DockingStation()
  }

  onUpdateButton(entity: DockingStation) {
    this.entity = entity;
    this.formDockingStation.setDockingStation(this.entity);
  }

  onAddArticleButton() {
    this.entity = new DockingStation();
  }

}
