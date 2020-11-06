import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormCpuComponent } from 'src/app/form-objects/form-cpu/form-cpu.component';
import { Cpu } from 'src/app/pcObjects/cpu/cpu';
import { CpuService } from 'src/app/service/service-cpu/cpu.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';


@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent extends ProductList implements OnInit {

  @ViewChild(FormCpuComponent) formCpu: FormCpuComponent;

  constructor(private cpuService: CpuService, protected workstationService: WorkStationService) {
    super(cpuService, workstationService);
    this.entity = new Cpu();
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: any) {
    this.entity = entity;
    this.formCpu.setCpu(this.entity);
  }

  onAddArticleButton() {
    this.entity = new Cpu();
  }

 


}
