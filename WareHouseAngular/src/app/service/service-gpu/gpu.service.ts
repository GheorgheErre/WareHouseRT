import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gpu } from 'src/app/pcObjects/gpu/gpu';

@Injectable({
  providedIn: 'root'
})
export class GpuService {

  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.saveUrl = 'http://localhost:8080/api/saveGpu';
  }

  public save(gpu: Gpu) {
    return this.http.post<Gpu>(this.saveUrl, gpu);
  }
}
