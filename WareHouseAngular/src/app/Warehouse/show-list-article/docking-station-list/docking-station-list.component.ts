import { Component, OnInit } from '@angular/core';
import { DockingStationService } from 'src/app/service/service-docking-station/docking-station-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-docking-station-list',
  templateUrl: './docking-station-list.component.html',
  styleUrls: ['./docking-station-list.component.scss']
})
export class DockingStationListComponent extends ProductList implements OnInit {

  constructor(private dockingStationService: DockingStationService) {
    super(dockingStationService);
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
