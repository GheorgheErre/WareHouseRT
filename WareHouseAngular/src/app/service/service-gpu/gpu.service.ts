import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class GpuService extends ServiceService{

 

  constructor(protected http: HttpClient) {
    super(http);
    this.saveUrl = 'http://localhost:8080/api/saveGpu';
    super.getListUrl = 'http://localhost:8080/api/findAllGpu';
    super.countUrl = 'http://localhost:8080/api/countGpu';
  }

}
