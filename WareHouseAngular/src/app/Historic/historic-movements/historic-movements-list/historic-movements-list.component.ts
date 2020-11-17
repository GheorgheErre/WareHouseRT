import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faEraser } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/pcObjects/product/product';
import { HistoricMovementsService } from 'src/app/service/historic-movements-service/historic-movements.service';

@Component({
  selector: 'app-historic-movements-list',
  templateUrl: './historic-movements-list.component.html',
  styleUrls: ['./historic-movements-list.component.scss']
})
export class HistoricMovementsListComponent implements OnInit {

  faEraser = faEraser;
  faPen = faPen;
  faPlus = faPlus;

  historicList: any;
  selectedNote: String;
  selectedProduct;
  filtered: String;

  constructor(private historicMovementsService: HistoricMovementsService) { }

  ngOnInit(): void {
    this.findAllProduct();
  }

  findAllProduct(): void {
    this.historicMovementsService.findAll().subscribe(list => {
      this.historicList = list;
    })
  }

  setNoteInModal(note){
    this.selectedNote = note;
  }

  setDetailsProductInModal(product){
    this.selectedProduct = this.removeType(product);
    delete this.selectedProduct.id;
   
  }


  removeType(json) {
    let productJSONString = JSON.stringify(json);
    productJSONString = productJSONString.split("@type").join("articleType");
    return JSON.parse(productJSONString);
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
