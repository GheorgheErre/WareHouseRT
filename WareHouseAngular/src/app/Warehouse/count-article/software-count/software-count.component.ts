import { Component, OnInit } from '@angular/core';
import { SoftwareService } from 'src/app/service/service-software/software-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-software-count',
  templateUrl: './software-count.component.html',
  styleUrls: ['./software-count.component.scss']
})
export class SoftwareCountComponent extends ProductCount implements OnInit {

  constructor(private softwareService: SoftwareService) {
    super(softwareService)
   }

  ngOnInit(): void {
    this.countProduct();
  }

}
