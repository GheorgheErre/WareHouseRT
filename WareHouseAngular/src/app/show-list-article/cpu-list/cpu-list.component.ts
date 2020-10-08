import { Component, OnInit } from '@angular/core';
import { CpuService } from 'src/app/service/service-cpu/cpu.service';
import { Cpu } from 'src/app/pcObjects/cpu/cpu';
import { ProductListComponent } from '../product-list/product-list/product-list.component';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent extends ProductListComponent implements OnInit {

  listCpu: Cpu[];

  constructor(private cpuService: CpuService) {
    super(cpuService);
  }

  ngOnInit(): void {
    this.cpuService.findAll().subscribe(list => {
      // this.listCpu=list;
    })

  }

}
