import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';



@Injectable({
  providedIn: 'root'
})
export class OperativeSystemService extends ServiceService{


  constructor(protected http: HttpClient) {
    super(http);
    this.saveUrl = 'http://localhost:8080/api/saveOperativeSystem';
    this.getListUrl = 'http://localhost:8080/api/findAllOperativeSystem';
    super.countUrl = 'http://localhost:8080/api/countOperativeSystem';


  }



}
