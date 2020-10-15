import { Component, OnInit } from '@angular/core';
import { DockingStationService } from 'src/app/service/service-docking-station/docking-station-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'docking-station-count',
  templateUrl: './docking-station-count.component.html',
  styleUrls: ['./docking-station-count.component.scss']
})
export class DockingStationCountComponent extends ProductCount implements OnInit {

  constructor(private dockingStationService: DockingStationService) { 
    super(dockingStationService); }

  ngOnInit(): void {
    this.countProduct();
  }

}
