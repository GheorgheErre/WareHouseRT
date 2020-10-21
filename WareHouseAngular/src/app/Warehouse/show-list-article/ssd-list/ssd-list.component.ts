import { Component, OnInit } from '@angular/core';
import { Ssd } from 'src/app/pcObjects/ssd/ssd';
import { SsdService } from 'src/app/service/service-ssd/ssd.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-ssd-list',
  templateUrl: './ssd-list.component.html',
  styleUrls: ['./ssd-list.component.scss']
})
export class SsdListComponent extends ProductList implements OnInit {

  constructor(private ssdService: SsdService) {
    super(ssdService);
    this.entity = new Ssd()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Ssd) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Ssd();
    this.update = false;
  }
}
