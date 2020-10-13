import { Component, OnInit } from '@angular/core';
import { HddService } from 'src/app/service/service-hdd/hdd.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-hdd-count',
  templateUrl: './hdd-count.component.html',
  styleUrls: ['./hdd-count.component.scss']
})
export class HddCountComponent extends ProductCount implements OnInit {

  constructor(private hddService: HddService) { 
    super(hddService); }

  ngOnInit(): void {
  }

}
