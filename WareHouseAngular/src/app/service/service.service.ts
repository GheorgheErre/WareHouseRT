import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../pcObjects/product/product';


@Injectable({
  providedIn: 'root'
})
export abstract class ServiceService {
  protected saveUrl: string;
  protected getListUrl: string;
  protected countUrl: string;

 

  constructor(protected http?: HttpClient) {
  
  }

  public save(service: Product) {
    return this.http.post<Product>(this.saveUrl, service);
  }

  public findAll(): Observable<Product[]> {

    return this.http.get<Product[]>(this.getListUrl);

  }

  public count(): Observable<Product[]> {

    return this.http.get<Product[]>(this.countUrl);

  }

}
