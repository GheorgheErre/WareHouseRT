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

}
