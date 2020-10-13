import { Component, OnInit } from '@angular/core';
import { CpuService } from 'src/app/service/service-cpu/cpu.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent extends ProductList implements OnInit {

  constructor(private cpuService: CpuService) {
    super(cpuService);
  }
  ngOnInit(): void {
    this.findAllProduct();
  }


}
