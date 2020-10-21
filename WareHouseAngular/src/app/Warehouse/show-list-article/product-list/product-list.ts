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
  filtered : String;

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

  searchFunction() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
      td = tr[i].getElementsByClassName(this.filtered)[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


  /* jsonToList(json): any{
   return Object.keys(json);

 }
 jsonToListValue(json):any{
   return 
 }
*/

}
