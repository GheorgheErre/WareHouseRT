import { Component, OnInit, ViewChild } from '@angular/core';
import { FormPowerSupplieComponent } from 'src/app/form-objects/form-power-supplie/form-power-supplie.component';
import { Powersupplie } from 'src/app/pcObjects/powerSupplie/powersupplie';
import { PowerSupplieService } from 'src/app/service/service-powerSupplie/power-supplie.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-power-supplie-list',
  templateUrl: './power-supplie-list.component.html',
  styleUrls: ['./power-supplie-list.component.scss']
})
export class PowerSupplieListComponent extends ProductList implements OnInit {

  @ViewChild(FormPowerSupplieComponent) formPowerSupplieComponent: FormPowerSupplieComponent;

  constructor(private powerSupplieService: PowerSupplieService, protected workstationService: WorkStationService) {
    super(powerSupplieService, workstationService);
    this.entity = new Powersupplie()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: Powersupplie) {
    this.entity = entity;
    this.formPowerSupplieComponent.setPowerSupplie(this.entity);

  }

  onAddArticleButton() {
    this.entity = new Powersupplie();
    this.formPowerSupplieComponent.setPowerSupplie(this.entity);
  }
}
