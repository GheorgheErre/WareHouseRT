import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class DesktopService extends ServiceService{



  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateDesktop';
    super.getListUrl = 'http://localhost:8080/api/findAllDesktop';
    super.countUrl = 'http://localhost:8080/api/countDesktop';
    super.getByIDUrl = 'http://localhost:8080/api/findDesktop';
    super.deleteUrl = 'http://localhost:8080/api/deleteDesktop';
  }

  


}
