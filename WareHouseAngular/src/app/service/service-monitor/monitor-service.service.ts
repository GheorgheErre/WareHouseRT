import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';



@Injectable({
  providedIn: 'root'
})
export class MonitorService extends ServiceService{


  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateMonitor';
    super.getListUrl = 'http://localhost:8080/api/findAllMonitor';
    super.countUrl = 'http://localhost:8080/api/countMonitor';
    super.getByIDUrl = 'http://localhost:8080/api/findMonitor';
    super.deleteUrl = 'http://localhost:8080/api/deleteMonitor';

  }


}
