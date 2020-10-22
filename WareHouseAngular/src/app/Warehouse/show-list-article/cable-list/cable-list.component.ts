import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { Cable } from 'src/app/pcObjects/cable/cable';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { ServiceService } from 'src/app/service/service.service';
import { ProductList } from '../product-list/product-list';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.scss']
})
export class CableListComponent extends ProductList implements OnInit {
  
  faPlus  = faPlus;
  constructor(private cableService: CableService) {
    super(cableService);
    this.entity = new Cable();
    
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  //aggiorno l'oggetto cable per farlo apparire nel form update
  onUpdateButton(entity: Cable) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Cable();
    this.update = false;
  }

 

}
