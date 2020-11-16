import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService extends ServiceService{

   
  constructor(protected http: HttpClient){
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateSoftware';
    super.getListUrl = 'http://localhost:8080/api/findAllSoftware';
    super.countUrl = 'http://localhost:8080/api/countSoftware';
    super.getByIDUrl = 'http://localhost:8080/api/findSoftware';
    super.deleteUrl = 'http://localhost:8080/api/deleteSoftware';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveSoftwareToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveSoftwareFromWarehouse';
  }
}
