import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../pcObjects/product/product';


@Injectable({
  providedIn: 'root'
})
export abstract class ServiceService {
  protected saveUrl: string;
  protected getListUrl: string;
  protected getByIDUrl: string;
  protected deleteUrl: string;
  protected countUrl: string;
  protected updateUrl: string;

 

  constructor(protected http?: HttpClient) {
  
  }

  public save(product: Product) {
    return this.http.post<Product>(this.saveUrl, product);
  }

  public update(product: Product) {
    return this.http.post<Product>(this.updateUrl, product);
  }

  public findAll(): Observable<any> {

    return this.http.get<Product[]>(this.getListUrl);

  }

  public findByID(id: string): Observable<any> {
    let params = new HttpParams().set("id",id);

    return this.http.get<Product[]>(this.getByIDUrl, {params: params});

  }

  public delete(product: Product) {
    return this.http.post<Product>(this.deleteUrl, product);
  }

  public count(): Observable<any> {

    return this.http.get<number>(this.countUrl);

  }

}
