import { Component } from '@angular/core';
import { faPlus, faPen, faEraser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Article } from 'src/app/pcObjects/article/article';
import { Product } from 'src/app/pcObjects/product/product';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  template: ''
})

export abstract class ProductList {


  faEye= faEye;
  faEyeSlash=faEyeSlash;
  faEraser = faEraser;
  faPen = faPen;
  faPlus = faPlus;
  listProduct: any;
  wareHouseListProduct: Product[];
  showList: Product[];
  entity: Product;
  note: String;
  filtered: String;
  isChecked: any;
  productToDelete: Product;
  deleteMessage: String = "";

  constructor(protected service: ServiceService, protected workstationService: WorkStationService) { }

  ngOnInit(): void {
  }

  findAllProduct(): void {
    this.service.findAll().subscribe(list => {
      this.listProduct = list;
      this.wareHouseListProduct = this.listProduct.filter((product) => product.location === "magazzino");
      this.showList = this.wareHouseListProduct;
    })
  }

  saveOrUpdate(product) {
    let btn = <HTMLInputElement> document.getElementById("btnSave"); 
    btn.disabled = true;

    this.entity = product.product;
    this.note = product.note;
    this.entity.location = "magazzino";

    document.getElementById('saveOrUpdateModal').click();
        
    this.service.saveOrUpdate(this.entity, this.note).subscribe(result => {
      console.log("ARTICLE CARICATO CON SUCCESSO");
      this.findAllProduct();
    });


    btn.disabled = false;

  }



  setProductToDelete(product) {
    this.productToDelete = product;
    this.note = new String;
    if (this.belongsWorkstation()) {
      this.deleteMessage = "This article is linked to a workstation. Delete the selected Article?"
    }
    else {
      this.deleteMessage = "Delete the selected Article?"
    }
  }

  deleteProduct(product: Product) {
    if (this.belongsWorkstation()) {
      this.findWorkstation(product);
    }
    document.getElementById('deleteArticleModal').click();
    this.service.delete(product, this.note).subscribe(result => {
      console.log("ARTICLE ELIMINATO CON SUCCESSO"),
      this.findAllProduct();
    });
    this.note = new String;
  }

  findWorkstation(product: Product) {
    let location = product.location.split(" ");
    let office = location[1];
    let numero = location[2];
    this.workstationService.findByOfficeAndNumero(office, numero).subscribe(data => {
      data.articles = data.articles.filter((a) => a.identifier != product.identifier);
      this.workstationService.saveOrUpdate(data).subscribe(result => {
       
      });
    })
  }

  

  showAllList() {
    if (this.isChecked) {
      this.isChecked = false;
      this.setList();
    }
    else {
      this.isChecked = true;
      this.setList();
    }
  }
  setList() {
    if (this.isChecked) {
      this.showList = this.listProduct;
    }
    else {
      this.showList = this.wareHouseListProduct;
    }
  }

  //check if a product belongs to a workstation or not
  belongsWorkstation() {
    if (this.productToDelete.location.includes("workstation")) {
      return true;
    }
    return false;
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


}
