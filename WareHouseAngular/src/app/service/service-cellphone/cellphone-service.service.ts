import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class CellphoneService extends ServiceService{


  
  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveCellphone';
    super.getListUrl = 'http://localhost:8080/api/findAllCellphone';
    super.getByIDUrl = 'http://localhost:8080/api/findCellphone';
    super.deleteUrl = 'http://localhost:8080/api/deleteCellphone';
    super.countUrl = 'http://localhost:8080/api/countCellphone';

  }



}
