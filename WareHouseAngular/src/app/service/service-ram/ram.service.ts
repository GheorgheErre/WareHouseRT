import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class RamService extends ServiceService{

  
  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateRam';
    super.getListUrl = 'http://localhost:8080/api/findAllRam';
    super.countUrl = 'http://localhost:8080/api/countRam';
    super.getByIDUrl = 'http://localhost:8080/api/findRam';
    super.deleteUrl = 'http://localhost:8080/api/deleteRam';
   }

 
}
