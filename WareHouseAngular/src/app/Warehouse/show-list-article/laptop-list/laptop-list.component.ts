import { Component, OnInit, ViewChild } from '@angular/core';
import { FormLaptopComponent } from 'src/app/form-objects/form-laptop/form-laptop.component';
import { Laptop } from 'src/app/pcObjects/laptop/laptop';
import { LaptopService } from 'src/app/service/service-laptop/laptop-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent extends ProductList implements OnInit {

  @ViewChild(FormLaptopComponent) formLaptop: FormLaptopComponent;

  constructor(private laptopService: LaptopService, protected workstationService: WorkStationService) {
    super(laptopService, workstationService);
    this.entity = new Laptop();
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Laptop) {
    this.entity = entity;
    this.formLaptop.setLaptop(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Laptop();
  }



}
