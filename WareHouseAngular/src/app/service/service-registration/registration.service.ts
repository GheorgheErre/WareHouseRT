import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

public registerUserFromRemote(user: User) : Observable<any>{
  return this.http.post<any>("http://localhost:8080/api/registerUser", user)
}

}
