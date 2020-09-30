import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ssd } from 'src/app/pcObjects/ssd/ssd';

@Injectable({
  providedIn: 'root'
})
export class SsdService {

  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveSsd';
   }

   public save(ssd : Ssd) {
    return this.http.post<Ssd>(this.saveUrl, ssd);
  }
}
