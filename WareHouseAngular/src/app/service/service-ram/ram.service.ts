import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ram } from 'src/app/pcObjects/ram/ram';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveRam';
   }

   public save(ram: Ram) {
    return this.http.post<Ram>(this.saveUrl, ram);
  }
}
