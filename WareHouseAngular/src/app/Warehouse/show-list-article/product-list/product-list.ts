import { Component } from '@angular/core';
import { Product } from 'src/app/pcObjects/product/product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  template: ''
})

export abstract class ProductList {
  listProduct: Product[];
  //listKeys:String[];
  update: boolean = false;
  entity: any;

  constructor(protected service: ServiceService) { }

  ngOnInit(): void {
  }

  findAllProduct(): void {
    this.service.findAll().subscribe(list => {
      this.listProduct = list;
      //this.listKeys=this.jsonToList(this.listProduct);
    })
  }

  saveOrUpdate() {
    this.service.saveOrUpdate(this.entity).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO"),
        this.reloadPage();
    });
  }

  deleteProduct(product: Product) {
    this.service.delete(product).subscribe(result => {
      console.log("ARTICLE ELIMINATO CON SUCCESSO"),
        this.reloadPage();
    });
  }

  reloadPage() {
    this.findAllProduct();
    window.location.reload();
  }

  /* jsonToList(json): any{
   return Object.keys(json);

 }
 jsonToListValue(json):any{
   return 
 }
*/

}
