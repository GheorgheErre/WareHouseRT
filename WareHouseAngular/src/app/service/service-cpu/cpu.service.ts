import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class CpuService extends ServiceService{

  

  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateCpu ';
    super.getListUrl = 'http://localhost:8080/api/findAllCpu';
    super.countUrl = 'http://localhost:8080/api/countCpu';
    super.getByIDUrl = 'http://localhost:8080/api/findCpu';
    super.deleteUrl = 'http://localhost:8080/api/deleteCpu';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveCpuToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveCpuFromWarehouse';
  }


}
