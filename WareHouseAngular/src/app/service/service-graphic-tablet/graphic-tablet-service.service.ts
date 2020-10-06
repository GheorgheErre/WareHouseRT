import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GraphicTablet } from '../../pcObjects/graficTablet/grafic-tablet';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class GraphicTabletService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveGraphicTablet';
    this.getListUrl = 'http://localhost:8080/api/findAllGraphicTablet';

  }

  public save(graphicTablet: GraphicTablet) {
    return this.http.post<GraphicTablet>(this.saveUrl, graphicTablet);
  }

  public findAll(): Observable<GraphicTablet[]> {

    return this.http.get<GraphicTablet[]>(this.getListUrl);

  }


}
