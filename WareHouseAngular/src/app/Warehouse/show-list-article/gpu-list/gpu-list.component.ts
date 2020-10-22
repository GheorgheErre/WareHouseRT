import { Component, OnInit } from '@angular/core';
import { Gpu } from 'src/app/pcObjects/gpu/gpu';
import { GpuService } from 'src/app/service/service-gpu/gpu.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-gpu-list',
  templateUrl: './gpu-list.component.html',
  styleUrls: ['./gpu-list.component.scss']
})
export class GpuListComponent extends ProductList implements OnInit {

  constructor(private gpuService: GpuService) {
    super(gpuService);
    this.entity = new Gpu();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: Gpu) {
    this.entity = entity;
  }

  onAddArticleButton() {
    this.entity = new Gpu();
  }
}
