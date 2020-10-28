import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Workstation } from 'src/app/pcObjects/workStation/workstation';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class WorkStationService {
 private saveOrUpdateUrl: string;
 private getListUrl: string;
 private getByIDUrl: string;
 private deleteUrl: string;
 private countUrl: string;
 private updateUrl: string;

  constructor(protected http: HttpClient) {
    
    this.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateWorkStation';
    this.getListUrl = 'http://localhost:8080/api/findAllWorkStation';
    this.countUrl = 'http://localhost:8080/api/countWorkStation';
    this.getByIDUrl = 'http://localhost:8080/api/findWorkStation';
    this.deleteUrl = 'http://localhost:8080/api/deleteWorkStation';
   }

   public saveOrUpdate(workstation: Workstation) {
    return this.http.post<Workstation>(this.saveOrUpdateUrl, workstation);
  }

  
  public findAll(): Observable<any> {

    return this.http.get<Workstation[]>(this.getListUrl);

  }

  public findByID(id: string): Observable<any> {
    let params = new HttpParams().set("id",id);

    return this.http.get<Workstation[]>(this.getByIDUrl, {params: params});

  }


  public delete(workstation: Workstation) {
    return this.http.post<Workstation>(this.deleteUrl, workstation);
  }

  public count(): Observable<any> {

    return this.http.get<number>(this.countUrl);

  }
}
