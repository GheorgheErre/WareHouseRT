import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mouse } from '../../pcObjects/mouse/mouse';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class MouseService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveMouse';
    this.getListUrl = 'http://localhost:8080/api/findAllMouse';

  }

  public save(mouse: Mouse) {
    return this.http.post<Mouse>(this.saveUrl, mouse);
  }

  public findAll(): Observable<Mouse[]> {

    return this.http.get<Mouse[]>(this.getListUrl);

  }


}
