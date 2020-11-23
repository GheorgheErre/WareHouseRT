import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DdtService {

  private incrementaNumeroDDT: string;

  constructor(private http: HttpClient) {
    this.incrementaNumeroDDT = 'http://localhost:8080/api/incrementaNumeroDDT';
   }

   public incrementaDDT(): Observable<any> {
    return this.http.get(this.incrementaNumeroDDT);
  }
}
