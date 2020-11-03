import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGpuComponent } from 'src/app/form-objects/form-gpu/form-gpu.component';
import { Gpu } from 'src/app/pcObjects/gpu/gpu';
import { GpuService } from 'src/app/service/service-gpu/gpu.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-gpu-list',
  templateUrl: './gpu-list.component.html',
  styleUrls: ['./gpu-list.component.scss']
})
export class GpuListComponent extends ProductList implements OnInit {

  @ViewChild(FormGpuComponent) formGpu: FormGpuComponent;

  constructor(private gpuService: GpuService) {
    super(gpuService);
    this.entity = new Gpu();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }
  onUpdateButton(entity: Gpu) {
    this.entity = entity;
    this.formGpu.setGpu(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Gpu();
  }
}
