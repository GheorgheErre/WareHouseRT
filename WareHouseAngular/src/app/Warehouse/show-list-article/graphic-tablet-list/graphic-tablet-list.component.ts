import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGraphicTabletComponent } from 'src/app/form-objects/form-graphic-tablet/form-graphic-tablet.component';
import { GraphicTablet } from 'src/app/pcObjects/graficTablet/grafic-tablet';
import { GraphicTabletService } from 'src/app/service/service-graphic-tablet/graphic-tablet-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-graphic-tablet-list',
  templateUrl: './graphic-tablet-list.component.html',
  styleUrls: ['./graphic-tablet-list.component.scss']
})
export class GraphicTabletListComponent extends ProductList implements OnInit {

  @ViewChild(FormGraphicTabletComponent) formGraphicTablet: FormGraphicTabletComponent;

  constructor(private graphicTabletService: GraphicTabletService, protected workstationService: WorkStationService) {
    super(graphicTabletService, workstationService);
    this.entity = new GraphicTablet();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: GraphicTablet) {
    this.entity = entity;
    this.formGraphicTablet.setGraphicTablet(this.entity);
  }

  onAddArticleButton() {
    this.entity = new GraphicTablet();   
     this.formGraphicTablet.setGraphicTablet(this.entity);


  }
}
