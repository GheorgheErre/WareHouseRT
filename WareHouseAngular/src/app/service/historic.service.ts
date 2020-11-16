import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historic } from '../Historic/historic/historic';

@Injectable({
  providedIn: 'root'
})
export class HistoricService {

  protected getListUrl: string;
  protected getByIDUrl: string;

  constructor(protected http?: HttpClient) {
  }

  public findAll(): Observable<any> {

    return this.http.get(this.getListUrl);

  }

  public findByID(id: string): Observable<any> {
    let params = new HttpParams().set("id", id);

    return this.http.get<Historic[]>(this.getByIDUrl, { params: params });

  }
}
