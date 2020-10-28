import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEraser, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Workstation } from 'src/app/pcObjects/workStation/workstation';
import { LaptopService } from 'src/app/service/service-laptop/laptop-service.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';

@Component({
  selector: 'app-user-workstation',
  templateUrl: './user-workstation.component.html',
  styleUrls: ['./user-workstation.component.scss']
})
export class UserWorkstationComponent implements OnInit {

  faEraser = faEraser;
  faPen = faPen;
  faPlus  = faPlus;
  office : string;
  numero : any;
  workstation = new Workstation();

  constructor(private router: Router,
    private workstationService : WorkStationService) {
    this.office = sessionStorage.getItem("ufficio_workstation");
    this.numero = sessionStorage.getItem("numero_workstation");
   }

  ngOnInit(): void {
    this.workstationService.findByID(this.numero).subscribe(data => {
      this.workstation = data;
     /* this.showWarehouseList = list.filter((product) => product.location === "magazzino");
      this.columns = this.jsonToList(this.showWarehouseList[0]);
      this.rows = this.jsonToListValue(this.showWarehouseList);*/
    })
  }

}
