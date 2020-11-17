import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HistoricService } from '../historic.service';

@Injectable({
  providedIn: 'root'
})
export class HistoricMovementsService extends HistoricService{

  constructor(protected http: HttpClient) {
    super(http);
    super.getListUrl = 'http://localhost:8080/api/findAllHistoryMovements';
    super.getByIDUrl = 'http://localhost:8080/api/findHistoryMovements';
  }
}
