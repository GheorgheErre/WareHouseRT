import { Component, OnInit, ViewChild } from '@angular/core';
import { FormHddComponent } from 'src/app/form-objects/form-hdd/form-hdd.component';
import { Hdd } from 'src/app/pcObjects/hdd/hdd';
import { HddService } from 'src/app/service/service-hdd/hdd.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-hdd-list',
  templateUrl: './hdd-list.component.html',
  styleUrls: ['./hdd-list.component.scss']
})
export class HddListComponent extends ProductList implements OnInit {

  @ViewChild(FormHddComponent) formHdd: FormHddComponent;

  constructor(private hddService: HddService) {
    super(hddService);
    this.entity = new Hdd()
   }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Hdd) {
    this.entity = entity;
    this.formHdd.setHdd(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Hdd();
  }
}
