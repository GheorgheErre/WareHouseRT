import { Component, OnInit } from '@angular/core';
import { Cellphone } from 'src/app/pcObjects/cellphone/chellphone';
import { CellphoneService } from 'src/app/service/service-cellphone/cellphone-service.service';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone-list.component.scss']
})
export class CellphoneListComponent implements OnInit {

  listCellphone: Cellphone[];

  constructor(private cellphoneService: CellphoneService) { }

  ngOnInit(): void {
    this.cellphoneService.findAll().subscribe(list => {
      this.listCellphone=list;
  })

}
}
