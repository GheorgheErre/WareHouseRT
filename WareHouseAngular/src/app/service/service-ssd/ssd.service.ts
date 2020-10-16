import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class SsdService extends ServiceService{



  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveSsd';
    super.getListUrl = 'http://localhost:8080/api/findAllSsd';
    super.countUrl = 'http://localhost:8080/api/countSsd';
    super.getByIDUrl = 'http://localhost:8080/api/findSsd';
    super.deleteUrl = 'http://localhost:8080/api/deleteSsd';
  }

}
