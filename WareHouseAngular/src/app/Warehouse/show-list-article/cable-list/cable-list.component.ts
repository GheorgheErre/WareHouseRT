import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cable } from 'src/app/pcObjects/cable/cable';
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
    this.entity = new Cable();

  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  //aggiorno l'oggetto cable per farlo apparire nel form update
  onUpdateButton(entity: Cable) {
    this.entity = entity;

  }

  onAddArticleButton() {
    this.entity = new Cable();

  }



}
