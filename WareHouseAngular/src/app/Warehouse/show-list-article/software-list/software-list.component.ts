import { Component, OnInit } from '@angular/core';
import { Software } from 'src/app/pcObjects/software/software';
import { SoftwareService } from 'src/app/service/service-software/software-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.scss']
})
export class SoftwareListComponent extends ProductList implements OnInit {

  constructor(private softwareService: SoftwareService) {
    super(softwareService);
    this.entity = new Software()
  }


  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Software) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Software();
    this.update = false;
  }
}
