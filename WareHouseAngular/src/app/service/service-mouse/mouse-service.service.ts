import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class MouseService extends ServiceService{



  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateMouse';
    super.getListUrl = 'http://localhost:8080/api/findAllMouse';
    super.countUrl = 'http://localhost:8080/api/countMouse';
    super.getByIDUrl = 'http://localhost:8080/api/findMouse';
    super.deleteUrl = 'http://localhost:8080/api/deleteMouse';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveMouseToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveMouseFromWarehouse';
  }

  
}
