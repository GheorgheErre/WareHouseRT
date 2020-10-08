import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service-tokenStorage/token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }

  authenticate(username, password): Observable<any> {
    return this.http.post(`http://localhost:8080/api/authenticate`, {
      username: username,
      password: password},
      httpOptions);
     }


  logout() {
    sessionStorage.removeItem('username');
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem('username')
    if (user === null) return ''
    return user
  }
}
