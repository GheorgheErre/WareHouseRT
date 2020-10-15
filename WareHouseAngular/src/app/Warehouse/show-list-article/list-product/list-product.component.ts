import { HttpClient } from '@angular/common/http';
import { MapType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { type } from 'os';
import { Product } from 'src/app/pcObjects/product/product';
import { CableService } from 'src/app/service/service-cable/cable.service';
import { CpuService } from 'src/app/service/service-cpu/cpu.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  listProduct: Product[];
  listKeys: String[];
  services: ServiceService;
  data: string;

  constructor(protected service: ServiceService, private http?: HttpClient, private router: Router) {

   // type map = Map<string, ServiceService>;

    //let mappa= new Map ([["service" , new ServiceService(http)],["cpu", new CpuService(http)], ["cable", new CableService(http)]]);



    
   let servicesJson =  {
      
        "cpu": new CpuService(http)
      ,
      
        "cable": new CableService(http)
      };

    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as { data: string };
    this.data = state.data;
let json= JSON.stringify(servicesJson);

json.
}


  ngOnInit(): void {
    this.service.findAll().subscribe(list => {
      
      this.listProduct = list;
      this.listKeys = this.jsonToList(this.listProduct);
      
    })

  }


  jsonToList(value): any {
    return Object.keys(value);

  }

}
