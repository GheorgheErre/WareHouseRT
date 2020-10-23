import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class WorkStationService extends ServiceService{

  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateWorkStation';
    super.getListUrl = 'http://localhost:8080/api/findAllWorkStation';
    super.countUrl = 'http://localhost:8080/api/countWorkStation';
    super.getByIDUrl = 'http://localhost:8080/api/findWorkStation';
    super.deleteUrl = 'http://localhost:8080/api/deleteWorkStation';
   }
}
