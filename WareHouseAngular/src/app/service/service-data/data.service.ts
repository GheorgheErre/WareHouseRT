import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public setService(service : ServiceService){
    window.sessionStorage.setItem("SERVICE", JSON.stringify(service));
  }

  public getService() {
    return JSON.parse(sessionStorage.getItem("SERVICE"));
  }

}

