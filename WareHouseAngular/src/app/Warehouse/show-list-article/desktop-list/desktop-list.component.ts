import { Component, OnInit } from '@angular/core';
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
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
