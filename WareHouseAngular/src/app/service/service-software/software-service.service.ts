import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService extends ServiceService{

   
  constructor(protected http: HttpClient){
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveSoftware';
    super.getListUrl = 'http://localhost:8080/api/findAllSoftware';
    super.countUrl = 'http://localhost:8080/api/countSoftware';
  }
}
