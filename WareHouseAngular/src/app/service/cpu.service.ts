import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cpu } from '../pcObjects/cpu/cpu';


@Injectable({
  providedIn: 'root'
})
export class CpuService {

  private saveUrl : string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveCpu';
   }

   public save(cpu: Cpu){
      return this.http.post<Cpu>(this.saveUrl, cpu);
   }
}
