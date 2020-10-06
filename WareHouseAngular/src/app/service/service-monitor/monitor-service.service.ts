import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Monitor } from '../../pcObjects/monitor/monitor';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveMonitor';
    this.getListUrl = 'http://localhost:8080/api/findAllMonitor';

  }

  public save(monitor: Monitor) {
    return this.http.post<Monitor>(this.saveUrl, monitor);
  }

  public findAll(): Observable<Monitor[]> {

    return this.http.get<Monitor[]>(this.getListUrl);

  }


}
