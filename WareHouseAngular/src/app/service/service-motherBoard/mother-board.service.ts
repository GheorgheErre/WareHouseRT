import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Motherboard } from 'src/app/pcObjects/motherBoard/motherboard';

@Injectable({
  providedIn: 'root'
})
export class MotherBoardService {

  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveMotherBoard';
   }

   public save(motherBoard : Motherboard) {
    return this.http.post<Motherboard>(this.saveUrl, motherBoard);
  }
}
