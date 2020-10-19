import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class CableService extends ServiceService{


  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveCable';
    super.getListUrl = 'http://localhost:8080/api/findAllCable';
    super.getByIDUrl = 'http://localhost:8080/api/findCable';
    super.deleteUrl = 'http://localhost:8080/api/deleteCable';
    super.countUrl = 'http://localhost:8080/api/countCable';
    super.updateUrl = 'http://localhost:8080/api/updateCable';
   

   }
}
