import { Component, OnInit } from '@angular/core';
import { GpuService } from 'src/app/service/service-gpu/gpu.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'gpu-count',
  templateUrl: './gpu-count.component.html',
  styleUrls: ['./gpu-count.component.scss']
})
export class GpuCountComponent extends ProductCount implements OnInit {

  constructor(private gpuService:GpuService) { 
    super(gpuService); }

  ngOnInit(): void {
    this.countProduct();
  }

}
