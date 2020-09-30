import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hdd } from 'src/app/pcObjects/hdd/hdd';

@Injectable({
  providedIn: 'root'
})
export class HddService {

  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveHdd';
   }

   public save(hdd : Hdd) {
    return this.http.post<Hdd>(this.saveUrl, hdd);
  }
}
