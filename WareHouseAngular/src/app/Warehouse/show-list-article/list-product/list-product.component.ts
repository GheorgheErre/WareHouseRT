import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/pcObjects/product/product';
import { DataService } from 'src/app/service/service-data/data.service';
import { ServiceService } from 'src/app/service/service.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: Product[];
  listKeys: String[];
  listValues: any[];
  services: ServiceService;
  data: string;

  faEdit = faEdit;
  faTrash = faTrash;

  constructor(protected service: ServiceService,
     private dataService: DataService,
     private http?: HttpClient) {

    //this.services=this.dataService.service;

}


  ngOnInit(): void {
    this.services.findAll().subscribe(list => {
      
      this.listProduct = list;
      this.listKeys = this.getKeysFromJson(this.listProduct);
      this.getValuesFromJson(this.listProduct);
    })

  }


  getKeysFromJson(value): any {
    return Object.keys(value[0]);
  }

  getValuesFromJson(value){
    let i = 0; 
    let arrayTmp : any[];
    arrayTmp = [];
    for(let entry of value){
    let keys = Object.keys(entry);
    let tmp = keys.map(k => entry[k]);
    arrayTmp[i] = tmp;
    i++;
    }
       this.listValues = arrayTmp;
  }

}
