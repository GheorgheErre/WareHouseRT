import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cable } from 'src/app/pcObjects/cable/cable';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { ServiceService } from 'src/app/service/service.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.scss']
})
export class CableListComponent extends ProductList implements OnInit {

  cable : Cable = new Cable();
 
  constructor(private cableService: CableService,
    private router: Router) { 
    super(cableService);
  }

  ngOnInit(): void {
    this.findAllProduct();
    
  }

  saveCable(){
    this.saveProduct(this.cable);
    this.reloadPage();
  
  }

  deleteCable(entity: Cable){
    this.deleteProduct(entity);
    this.reloadPage();
  }

  updateCable(){
    this.deleteProduct(this.cable);
    this.reloadPage();
  }

  updateSavedEntity(entity: Cable){
    this.cable = entity;
  }

  reloadPage() {
    this.ngOnInit();
    window.location.reload();
  }

}
