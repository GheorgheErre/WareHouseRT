import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Desktop } from '../../pcObjects/desktop/desktop';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DesktopService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveDesktop';
    this.getListUrl = 'http://localhost:8080/api/findAllDesktop';

  }

  public save(desktop: Desktop) {
    return this.http.post<Desktop>(this.saveUrl, desktop);
  }

  public findAll(): Observable<Desktop[]> {

    return this.http.get<Desktop[]>(this.getListUrl);

  }


}
