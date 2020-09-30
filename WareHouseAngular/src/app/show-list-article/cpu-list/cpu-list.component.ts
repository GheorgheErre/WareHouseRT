import { Component, OnInit } from '@angular/core';
import { CpuService } from 'src/app/service/cpu.service';
import { Cpu } from 'src/app/pcObjects/cpu/cpu';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.scss']
})
export class CpuListComponent implements OnInit {

  listCpu: Cpu[];

  constructor(private cpuService: CpuService) { }

  ngOnInit(): void {
    this.cpuService.findAll().subscribe(list => {
      this.listCpu=list;
    })

  }

}
