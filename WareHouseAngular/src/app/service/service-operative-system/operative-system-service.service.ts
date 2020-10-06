import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OperativeSystem } from '../../pcObjects/operativeSystem/operative-system';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class OperativeSystemService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveOperativeSystem';
    this.getListUrl = 'http://localhost:8080/api/findAllOperativeSystem';

  }

  public save(operativeSystem: OperativeSystem) {
    return this.http.post<OperativeSystem>(this.saveUrl, operativeSystem);
  }

  public findAll(): Observable<OperativeSystem[]> {

    return this.http.get<OperativeSystem[]>(this.getListUrl);

  }


}
