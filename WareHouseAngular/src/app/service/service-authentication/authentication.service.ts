import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }

  authenticate(username, password) {
    return this.http.post<any>(`http://localhost:8080/api/authenticate`,{username, password}).pipe(
      map( userData => {
        sessionStorage.setItem('username', username);
        let tokenStr = 'Bearer' + userData.token;
        sessionStorage.setItem('toke', tokenStr);
        return userData;
      }));
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
