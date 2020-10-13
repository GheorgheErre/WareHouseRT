import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'src/app/service/service-desktop/desktop-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'desktop-count',
  templateUrl: './desktop-count.component.html',
  styleUrls: ['./desktop-count.component.scss']
})
export class DesktopCountComponent extends ProductCount implements OnInit {

  constructor(private desktopService: DesktopService) { 
    super(desktopService); 
  }

  ngOnInit(): void {
    this.countProduct();
  }

}
