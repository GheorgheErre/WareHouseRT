import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class SoftwareServiceService extends ServiceService{

   
  constructor(protected http: HttpClient){
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveCellphone';
    super.getListUrl = 'http://localhost:8080/api/findAllCellphone';
    super.countUrl = 'http://localhost:8080/api/countCellphone';
  }
}
