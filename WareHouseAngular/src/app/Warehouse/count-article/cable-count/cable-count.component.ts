import { Component, Input, OnInit } from '@angular/core';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'cable-count',
  templateUrl: './cable-count.component.html',
  styleUrls: ['./cable-count.component.scss']
})
export class CableCountComponent extends ProductCount implements OnInit {



  constructor(private cableService: CableService) {
    super(cableService);
  }
  ngOnInit(): void {
    this.countProduct();
  }

}
