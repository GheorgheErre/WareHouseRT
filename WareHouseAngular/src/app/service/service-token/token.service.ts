import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService extends ServiceService {

  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateToken';
    super.getListUrl = 'http://localhost:8080/api/findAllToken';
    super.countUrl = 'http://localhost:8080/api/countToken';
    super.getByIDUrl = 'http://localhost:8080/api/findToken';
    super.deleteUrl = 'http://localhost:8080/api/deleteToken';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveTokenToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveTokenFromWarehouse';
  }
}
