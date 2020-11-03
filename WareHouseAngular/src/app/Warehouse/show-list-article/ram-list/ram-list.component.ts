import { Component, OnInit, ViewChild } from '@angular/core';
import { FormRamComponent } from 'src/app/form-objects/form-ram/form-ram.component';
import { Ram } from 'src/app/pcObjects/ram/ram';
import { RamService } from 'src/app/service/service-ram/ram.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-ram-list',
  templateUrl: './ram-list.component.html',
  styleUrls: ['./ram-list.component.scss']
})
export class RamListComponent extends ProductList implements OnInit {

  @ViewChild(FormRamComponent) formRamComponent: FormRamComponent;

  constructor(private ramService: RamService) {
    super(ramService);
    this.entity = new Ram()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: Ram) {
    this.entity = entity;
    this.formRamComponent.setRam(this.entity);

  }

  onAddArticleButton() {
    this.entity = new Ram();
  }
}
