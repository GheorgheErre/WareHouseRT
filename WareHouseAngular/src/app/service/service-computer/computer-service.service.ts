import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';



@Injectable({
  providedIn: 'root'
})
export class ComputerService extends ServiceService{



  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveComputer';
    super.getListUrl = 'http://localhost:8080/api/findAllComputer';
    super.countUrl = 'http://localhost:8080/api/countComputer';
    super.getByIDUrl = 'http://localhost:8080/api/findComputer';
    super.deleteUrl = 'http://localhost:8080/api/deleteComputer';
  }

 


}
