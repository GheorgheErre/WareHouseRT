import { Component, OnInit } from '@angular/core';
import { GraphicTabletService } from 'src/app/service/service-graphic-tablet/graphic-tablet-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-graphic-tablet-count',
  templateUrl: './graphic-tablet-count.component.html',
  styleUrls: ['./graphic-tablet-count.component.scss']
})
export class GraphicTabletCountComponent extends ProductCount implements OnInit {

  constructor(private graphicTabletService: GraphicTabletService) { 
    super(graphicTabletService); }

  ngOnInit(): void {
    this.countProduct();
  }

}
