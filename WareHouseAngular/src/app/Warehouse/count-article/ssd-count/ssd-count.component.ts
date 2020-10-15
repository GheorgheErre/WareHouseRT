import { Component, OnInit } from '@angular/core';
import { SsdService } from 'src/app/service/service-ssd/ssd.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'ssd-count',
  templateUrl: './ssd-count.component.html',
  styleUrls: ['./ssd-count.component.scss']
})
export class SsdCountComponent extends ProductCount implements OnInit {

  constructor(private ssdService: SsdService) {
    super(ssdService)
   }

  ngOnInit(): void {
    this.countProduct();
  }

}
