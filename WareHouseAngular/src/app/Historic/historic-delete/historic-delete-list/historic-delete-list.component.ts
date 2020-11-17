import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faEraser } from '@fortawesome/free-solid-svg-icons';
import { HistoricDeleteService } from 'src/app/service/historic-delete-service/historic-delete.service';

@Component({
  selector: 'app-historic-delete-list',
  templateUrl: './historic-delete-list.component.html',
  styleUrls: ['./historic-delete-list.component.scss']
})
export class HistoricDeleteListComponent implements OnInit {

  faEraser = faEraser;
  faPen = faPen;
  faPlus = faPlus;

  historicList: any;
  selectedNote; String;
  selectedProduct;
  filtered: String;

  constructor(private historicDeleteService: HistoricDeleteService) { }

  ngOnInit(): void {
    this.findAllProduct();
  }


  findAllProduct(): void {
    this.historicDeleteService.findAll().subscribe(list => {
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
