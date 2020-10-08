import { Component, OnInit } from '@angular/core';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.scss']
})
export class CableListComponent extends ProductList implements OnInit {



  constructor(private cableService: CableService) { 
    super(cableService);
  }

  ngOnInit(): void {
    this.findAllProduct();
    
  }

}
