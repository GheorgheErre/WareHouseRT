import { Component, OnInit, ViewChild } from '@angular/core';
import { FormCellphoneComponent } from 'src/app/form-objects/form-cellphone/form-cellphone.component';
import { Cellphone } from 'src/app/pcObjects/cellphone/cellphone';
import { CellphoneService } from 'src/app/service/service-cellphone/cellphone-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone-list.component.scss']
})
export class CellphoneListComponent extends ProductList implements OnInit {

  @ViewChild(FormCellphoneComponent) formCellphone: FormCellphoneComponent;

  constructor(private cellphoneService: CellphoneService) { 
    super(cellphoneService);
    this.entity = new Cellphone();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Cellphone) {
    this.entity = entity;
    this.formCellphone.setCellphone(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Cellphone();
  }
}
