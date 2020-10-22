import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Cpu } from 'src/app/pcObjects/cpu/cpu';
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
    this.entity = new Cpu();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: any) {
    this.entity = entity;
  }

  onAddArticleButton() {
    this.entity = new Cpu();
  }

 


}
