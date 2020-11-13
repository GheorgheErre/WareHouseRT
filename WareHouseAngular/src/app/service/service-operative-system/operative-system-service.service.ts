import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';



@Injectable({
  providedIn: 'root'
})
export class OperativeSystemService extends ServiceService{


  constructor(protected http: HttpClient) {
    super(http);
    this.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateOperativeSystem';
    this.getListUrl = 'http://localhost:8080/api/findAllOperativeSystem';
    super.countUrl = 'http://localhost:8080/api/countOperativeSystem';
    super.getByIDUrl = 'http://localhost:8080/api/findOperativeSystem';
    super.deleteUrl = 'http://localhost:8080/api/deleteOperativeSystem';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveOperativeSystemToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveOperativeSystemFromWarehouse';
  }



}
