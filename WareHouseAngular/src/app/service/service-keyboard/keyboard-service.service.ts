import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class KeyboardService extends ServiceService{


  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateKeyboard';
    super.getListUrl = 'http://localhost:8080/api/findAllKeyboard';
    super.countUrl = 'http://localhost:8080/api/countKeyboard';
    super.getByIDUrl = 'http://localhost:8080/api/findKeyboard';
    super.deleteUrl = 'http://localhost:8080/api/deleteKeyboard';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveKeyboardToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveKeyboardFromWarehouse';
  }

 

}
