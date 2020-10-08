import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class MouseService extends ServiceService{



  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveMouse';
    super.getListUrl = 'http://localhost:8080/api/findAllMouse';
    super.countUrl = 'http://localhost:8080/api/countMouse';

  }

  
}
