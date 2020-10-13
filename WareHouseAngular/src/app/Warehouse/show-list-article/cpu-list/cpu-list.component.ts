import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CpuService } from 'src/app/service/service-cpu/cpu.service';
import { ProductList } from '../product-list/product-list';
import { GetjsoncolKeysPipe } from './getjsoncol-keys.pipe';
import { GetjsonvaluesPipe } from './getjsonvalues.pipe';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent extends ProductList implements OnInit {

  constructor(private cpuService: CpuService, private getjsonvalue: GetjsonvaluesPipe, private getjsonkey: GetjsoncolKeysPipe) {
    super(cpuService);
  }
  ngOnInit(): void {
    this.findAllProduct();
  }


}
