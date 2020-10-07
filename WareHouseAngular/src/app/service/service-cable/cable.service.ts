import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cable } from 'src/app/pcObjects/cable/cable';

@Injectable({
  providedIn: 'root'
})
export class CableService {
 private saveUrl: string;
 private getListUrl: string;
 

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveCpu';
    this.getListUrl = 'http://localhost:8080/api/findAllCpu';

   }
   public save(cable: Cable) {
    return this.http.post<Cable>(this.saveUrl, cable);
  }

  public findAll(): Observable<Cable[]> {

    return this.http.get<Cable[]>(this.getListUrl);

  }

}
