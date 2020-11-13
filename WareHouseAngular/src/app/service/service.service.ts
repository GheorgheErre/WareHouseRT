import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../pcObjects/product/product';


@Injectable({
  providedIn: 'root'
})
export abstract class ServiceService {
  protected saveOrUpdateUrl: string;
  protected getListUrl: string;
  protected getByIDUrl: string;
  protected deleteUrl: string;
  protected countUrl: string;
  protected updateUrl: string;
  protected moveToWarehouseUrl: string;
  protected moveFromWarehouseUrl: string;
 

  constructor(protected http?: HttpClient) {
  }

  public saveOrUpdate(product: Product, note: String) {
    let json=Object.assign({}, {
      "product" : product
    }, {
      "note": note
    });
    return this.http.post<Product>(this.saveOrUpdateUrl, json);
  }

  public moveToWareHouse(product: Product, note: String) {
    let json=Object.assign({}, {
      "product" : product
    }, {
      "note": note
    });
    return this.http.post<Product>(this.moveToWarehouseUrl, json);
  }

  
  public findAll(): Observable<any> {

    return this.http.get(this.getListUrl);

  }

  public findByID(id: string): Observable<any> {
    let params = new HttpParams().set("id",id);

    return this.http.get<Product[]>(this.getByIDUrl, {params: params});

  }

  public delete(product: Product, note: String) {

   let json=Object.assign({}, {
        "product" : product
      }, {
        "note": note
      });

      return this.http.post<Product>(this.deleteUrl, json);

  }
   
  


  public count(): Observable<any> {

    return this.http.get<number>(this.countUrl);

  }

}
