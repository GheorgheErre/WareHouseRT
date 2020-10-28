import { Component } from '@angular/core';
import { faPlus,faPen,faEraser } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/pcObjects/product/product';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  template: ''
})

export abstract class ProductList {

  faEraser = faEraser;
  faPen = faPen;
  faPlus  = faPlus;
  listProduct: any;
  wareHouseListProduct: Product[];
  showList: Product[];
  //listKeys:String[];
  entity: any;
  filtered : String;
  isChecked : any;

  constructor(protected service: ServiceService) { }

  ngOnInit(): void {
  }

  findAllProduct(): void {
    this.service.findAll().subscribe(list => {
      this.listProduct = list;
      this.wareHouseListProduct = this.listProduct.filter((product) => product.location === "magazzino");
      this.showList = this.wareHouseListProduct;
    })
  }

  saveOrUpdate() {
    this.entity.location = "magazzino";
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

  setList(){
    if(this.isChecked){
      this.showList = this.listProduct;
    }
    else{
      this.showList = this.wareHouseListProduct;
    }
  }

  searchFunction() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
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
