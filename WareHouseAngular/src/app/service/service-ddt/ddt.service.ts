import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DdtService {

  private incrementaNumeroDDT: string;
  private getDDT: string;

  constructor(private http: HttpClient) {
    this.incrementaNumeroDDT = 'http://localhost:8080/api/incrementaNumeroDDT';
    this.getDDT = 'http://localhost:8080/api/getNumeroDDT';
   }

   public incrementaDDT(): Observable<any> {
    return this.http.get(this.incrementaNumeroDDT);
  }

  public getNumeroDDT(): Observable<any> {
    return this.http.get(this.getDDT);
  }
}
