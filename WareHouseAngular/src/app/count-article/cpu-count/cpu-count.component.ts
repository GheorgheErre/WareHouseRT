import { Component, OnInit } from '@angular/core';
import { CpuService } from 'src/app/service/service-cpu/cpu.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-cpu-count',
  templateUrl: './cpu-count.component.html',
  styleUrls: ['./cpu-count.component.scss']
})
export class CpuCountComponent extends ProductCount implements OnInit {

  constructor(private cpuService: CpuService) { 
    super(cpuService);
  }

  ngOnInit(): void { 
    this.countProduct();
  }

}
