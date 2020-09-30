import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cpu } from '../pcObjects/cpu/cpu';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CpuService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveCpu';
    this.getListUrl = 'http://localhost:8080/api/findAllCpu';

  }

  public save(cpu: Cpu) {
    return this.http.post<Cpu>(this.saveUrl, cpu);
  }

  public findAll(): Observable<Cpu[]> {

    return this.http.get<Cpu[]>(this.getListUrl);

  }


}
