import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cellphone } from '../../pcObjects/cellphone/chellphone';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CellphoneService {

  private saveUrl: string;
  private getListUrl: string;
  private countUrl: string;
  
  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveCellphone';
    this.getListUrl = 'http://localhost:8080/api/findAllCellphone';

  }

  public save(cellphone: Cellphone) {
    return this.http.post<Cellphone>(this.saveUrl, cellphone);
  }

  public findAll(): Observable<Cellphone[]> {

    return this.http.get<Cellphone[]>(this.getListUrl);

  }
  public count(): Observable<Cellphone[]> {

    return this.http.get<Cellphone[]>(this.countUrl);

  }

}
