import { Component, OnInit } from '@angular/core';
import { Cpu } from '../pcObjects/cpu/cpu';
import { CpuService } from '../service/cpu.service';

@Component({
  selector: 'app-form-cpu',
  templateUrl: './form-cpu.component.html',
  styleUrls: ['./form-cpu.component.scss']
})
export class FormCPUComponent implements OnInit {

  cpu: Cpu;

  constructor(private cpuService: CpuService) {
    this.cpu = new Cpu();
  }

  onsubmit(): void {

    this.cpuService.save(this.cpu).subscribe(result => console.log(result.id));
  }

  ngOnInit(): void {
  }

}
