import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class LaptopService  extends ServiceService{

   
  constructor(protected http: HttpClient){
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateLaptop';
    super.getListUrl = 'http://localhost:8080/api/findAllLaptop';
    super.countUrl = 'http://localhost:8080/api/countLaptop';
    super.getByIDUrl = 'http://localhost:8080/api/findLaptop';
    super.deleteUrl = 'http://localhost:8080/api/deleteLaptop';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveLaptopToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveLaptopFromWarehouse';
  }
}
