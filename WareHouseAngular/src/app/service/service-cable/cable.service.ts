import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/pcObjects/product/product';

import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class CableService extends ServiceService{
   moveToWarehouseUrl: string;
   moveFromWarehouseUrl: string;


  constructor(protected http: HttpClient) {
    super(http);
    super.saveOrUpdateUrl = 'http://localhost:8080/api/saveOrUpdateCable';
    super.getListUrl = 'http://localhost:8080/api/findAllCable';
    super.getByIDUrl = 'http://localhost:8080/api/findCable';
    super.deleteUrl = 'http://localhost:8080/api/deleteCable';
    super.countUrl = 'http://localhost:8080/api/countCable';
    super.updateUrl = 'http://localhost:8080/api/updateCable';
    super.moveToWarehouseUrl = 'http://localhost:8080/api/moveCableToWarehouse';
    super.moveFromWarehouseUrl = 'http://localhost:8080/api/moveCableFromWarehouse';

   }

}
