import { Component, OnInit } from '@angular/core';
import { GraphicTabletService } from 'src/app/service/service-graphic-tablet/graphic-tablet-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-graphic-table-count',
  templateUrl: './graphic-table-count.component.html',
  styleUrls: ['./graphic-table-count.component.scss']
})
export class GraphicTableCountComponent extends ProductCount implements OnInit {

  constructor(private graphicTableService: GraphicTabletService) { 
    super(graphicTableService); }

  ngOnInit(): void {
    this.countProduct();
  }

}
