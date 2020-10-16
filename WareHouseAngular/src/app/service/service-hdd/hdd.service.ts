import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class HddService extends ServiceService{



  constructor(protected http: HttpClient) {
    super(http);
    this.saveUrl = 'http://localhost:8080/api/saveHdd';
    super.getListUrl = 'http://localhost:8080/api/findAllHdd';
    super.countUrl = 'http://localhost:8080/api/countHdd';
    super.getByIDUrl = 'http://localhost:8080/api/findHdd';
    super.deleteUrl = 'http://localhost:8080/api/deleteHdd';
   }

}
