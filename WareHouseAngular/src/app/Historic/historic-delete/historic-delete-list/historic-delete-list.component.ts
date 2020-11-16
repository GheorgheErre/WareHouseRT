import { Component, OnInit } from '@angular/core';
import { HistoricDeleteService } from 'src/app/service/historic-delete-service/historic-delete.service';

@Component({
  selector: 'app-historic-delete-list',
  templateUrl: './historic-delete-list.component.html',
  styleUrls: ['./historic-delete-list.component.scss']
})
export class HistoricDeleteListComponent implements OnInit {

  historicList: any;

  constructor(private historicDeleteService: HistoricDeleteService) { }

  ngOnInit(): void {
    this.findAllProduct();
  }


  findAllProduct(): void {
    this.historicDeleteService.findAll().subscribe(list => {
      this.historicList = list;
    })
  }
}
