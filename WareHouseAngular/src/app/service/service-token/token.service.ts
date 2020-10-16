import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService extends ServiceService {

  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveToken';
    super.getListUrl = 'http://localhost:8080/api/findAllToken';
    super.countUrl = 'http://localhost:8080/api/countToken';
    super.getByIDUrl = 'http://localhost:8080/api/findCellphone';
    super.deleteUrl = 'http://localhost:8080/api/deleteCellphone';
  }
}
