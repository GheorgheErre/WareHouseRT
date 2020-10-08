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

  public save(product: Product) {
    return this.http.post<Product>(this.saveUrl, product);
  }

  public findAll(): Observable<any> {

    return this.http.get(this.getListUrl);

  }

  public count(): Observable<any> {

    return this.http.get(this.countUrl);

  }

}
