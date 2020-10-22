import { Component, OnInit } from '@angular/core';
import { Desktop } from 'src/app/pcObjects/desktop/desktop';
import { DesktopService } from 'src/app/service/service-desktop/desktop-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-desktop-list',
  templateUrl: './desktop-list.component.html',
  styleUrls: ['./desktop-list.component.scss']
})
export class DesktopListComponent extends ProductList implements OnInit {

  constructor(private desktopService: DesktopService) {
    super(desktopService);
    this.entity = new Desktop();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Desktop) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Desktop();
    this.update = false;
  }


}
