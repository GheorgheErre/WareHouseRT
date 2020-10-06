import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DockingStation } from '../../pcObjects/dockingStation/docking-station';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DockingStationService {

  private saveUrl: string;
  private getListUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveDockingStation';
    this.getListUrl = 'http://localhost:8080/api/findAllDockingStation';

  }

  public save(dockingStation: DockingStation) {
    return this.http.post<DockingStation>(this.saveUrl, dockingStation);
  }

  public findAll(): Observable<DockingStation[]> {

    return this.http.get<DockingStation[]>(this.getListUrl);

  }


}
