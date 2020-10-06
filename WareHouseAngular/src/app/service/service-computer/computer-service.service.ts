import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Computer } from '../../pcObjects/computer/computer';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveComputer';
    this.getListUrl = 'http://localhost:8080/api/findAllComputer';

  }

  public save(computer: Computer) {
    return this.http.post<Computer>(this.saveUrl, computer);
  }

  public findAll(): Observable<Computer[]> {

    return this.http.get<Computer[]>(this.getListUrl);

  }


}
