import { Injectable } from '@angular/core';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
service: ServiceService;

  constructor() { }
}
