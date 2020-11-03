import { Component, OnInit, ViewChild } from '@angular/core';
import { FormDesktopComponent } from 'src/app/form-objects/form-desktop/form-desktop.component';
import { Desktop } from 'src/app/pcObjects/desktop/desktop';
import { DesktopService } from 'src/app/service/service-desktop/desktop-service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-desktop-list',
  templateUrl: './desktop-list.component.html',
  styleUrls: ['./desktop-list.component.scss']
})
export class DesktopListComponent extends ProductList implements OnInit {

  @ViewChild(FormDesktopComponent) formDesktop: FormDesktopComponent;

  constructor(private desktopService: DesktopService) {
    super(desktopService);
    this.entity = new Desktop();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Desktop) {
    this.entity = entity;
    this.formDesktop.setDesktop(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Desktop();
  }


}
