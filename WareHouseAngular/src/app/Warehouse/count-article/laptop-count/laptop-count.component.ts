import { Component, OnInit } from '@angular/core';
import { LaptopService } from 'src/app/service/service-laptop/laptop-service.service';
import { ProductCount } from '../product-count';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'laptop-count',
  templateUrl: './laptop-count.component.html',
  styleUrls: ['./laptop-count.component.scss'],
  
})
export class LaptopCountComponent extends ProductCount implements OnInit {

  faArrowRight = faArrowRight;
  constructor(private laptopService: LaptopService) { 
    super(laptopService);
  }

  ngOnInit(): void {
    this.countProduct();
  }

}
