import { Component, OnInit } from '@angular/core';
import { Ram } from 'src/app/pcObjects/ram/ram';
import { RamService } from 'src/app/service/service-ram/ram.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-ram-list',
  templateUrl: './ram-list.component.html',
  styleUrls: ['./ram-list.component.scss']
})
export class RamListComponent extends ProductList implements OnInit {

  constructor(private ramService: RamService) {
    super(ramService);
    this.entity = new Ram()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: Ram) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Ram();
    this.update = false;
  }
}
