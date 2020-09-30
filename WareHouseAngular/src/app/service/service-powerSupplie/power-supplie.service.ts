import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Powersupplie } from 'src/app/pcObjects/powerSupplie/powersupplie';

@Injectable({
  providedIn: 'root'
})
export class PowerSupplieService {

  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/savePowerSupplie';
  }

  public save(powerSupplie: Powersupplie) {
    return this.http.post<Powersupplie>(this.saveUrl, powerSupplie);
  }
}
