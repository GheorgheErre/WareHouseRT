import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faEraser } from '@fortawesome/free-solid-svg-icons';
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
  selectedNote; String;
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
