import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormCableComponent } from 'src/app/form-objects/form-cable/form-cable.component';
import { Cable } from 'src/app/pcObjects/cable/cable';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.scss']
})
export class CableListComponent extends ProductList implements OnInit {

  @ViewChild(FormCableComponent) formCable: FormCableComponent;

  constructor(private cableService: CableService, protected workstationService: WorkStationService) {
    super(cableService, workstationService);
    this.entity = new Cable();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  //aggiorno l'oggetto cable per farlo apparire nel form update
  onUpdateButton(entity: Cable) {
    this.entity = entity;
    this.formCable.setCable(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Cable();
  }



}
