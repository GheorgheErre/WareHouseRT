import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Keyboard } from '../../pcObjects/keyBoard/key-board';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveKeyboard';
    this.getListUrl = 'http://localhost:8080/api/findAllKeyboard';

  }

  public save(keyBoard: Keyboard) {
    return this.http.post<Keyboard>(this.saveUrl, keyBoard);
  }

  public findAll(): Observable<Keyboard[]> {

    return this.http.get<Keyboard[]>(this.getListUrl);

  }


}
