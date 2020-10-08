import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './service-tokenStorage/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
      let token = this.tokenStorage.getToken();
      let username = this.tokenStorage.getUser();
        if (token && username) {
            req = req.clone({
              setHeaders: {
                Authorization: 'Bearer ' + token
              }
            })
          }
            return next.handle(req);              
    }

}   

