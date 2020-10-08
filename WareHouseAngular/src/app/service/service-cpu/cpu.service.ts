import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cpu } from '../../pcObjects/cpu/cpu';
import { Observable } from 'rxjs/internal/Observable';
import { ServiceService } from '../service.service';


@Injectable({
  providedIn: 'root'
})
export class CpuService extends ServiceService{

  // private saveUrl: string;
  // private getListUrl: string;
  // private countUrl: string;

  constructor(protected http: HttpClient) {
    super(http);
    super.saveUrl = 'http://localhost:8080/api/saveCpu';
    super.getListUrl = 'http://localhost:8080/api/findAllCpu';
    super.countUrl = 'http://localhost:8080/api/countCpu';

  }

  // public save(cpu: Cpu) {
  //   return this.http.post<Cpu>(this.saveUrl, cpu);
  // }

  // public findAll(): Observable<Cpu[]> {

  //   return this.http.get<Cpu[]>(this.getListUrl);

  // }

  // public count(): Observable<Cpu[]> {

  //   return this.http.get<Cpu[]>(this.countUrl);

  // }

}
