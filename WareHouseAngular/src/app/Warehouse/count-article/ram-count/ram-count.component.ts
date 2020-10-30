import { Component, OnInit } from '@angular/core';
import { RamService } from 'src/app/service/service-ram/ram.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'ram-count',
  templateUrl: './ram-count.component.html',
  styleUrls: ['./ram-count.component.scss']
})
export class RamCountComponent extends ProductCount implements OnInit {

  constructor(private ramService: RamService) {
    super(ramService);
   }

  ngOnInit(): void {
    this.countProduct();
  }

}
