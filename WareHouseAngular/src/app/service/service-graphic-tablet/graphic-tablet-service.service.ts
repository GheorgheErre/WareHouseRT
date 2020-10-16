import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class GraphicTabletService  extends ServiceService{


  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveGraphicTablet';
    super.getListUrl = 'http://localhost:8080/api/findAllGraphicTablet';
    super.countUrl = 'http://localhost:8080/api/countGraphicTablet';
    super.getByIDUrl = 'http://localhost:8080/api/findGraphicTablet';
    super.deleteUrl = 'http://localhost:8080/api/deleteGraphicTablet';
  }

 
}
