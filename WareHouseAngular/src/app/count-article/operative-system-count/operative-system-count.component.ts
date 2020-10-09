import { Component, OnInit } from '@angular/core';
import { OperativeSystemService } from 'src/app/service/service-operative-system/operative-system-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-operative-system-count',
  templateUrl: './operative-system-count.component.html',
  styleUrls: ['./operative-system-count.component.scss']
})
export class OperativeSystemCountComponent extends ProductCount implements OnInit {

  constructor(private operativeSystemService: OperativeSystemService) {
    super(operativeSystemService)
   }

  ngOnInit(): void {
  this.countProduct();
  }

}
