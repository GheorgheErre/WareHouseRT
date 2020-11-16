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
}
