import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cpu } from 'src/app/pcObjects/cpu/cpu';

@Component({
  selector: 'app-form-cpu',
  templateUrl: './form-cpu.component.html',
  styleUrls: ['./form-cpu.component.scss']
})
export class FormCpuComponent implements OnInit {

  @Output() cpuToEmit = new EventEmitter<{product:Cpu, note:String}>();

  cpuTemp = new Cpu();
  noteTemp: String;

  constructor() { }

  ngOnInit(): void {
  }
  setCpu(entity): void {
    this.cpuTemp = JSON.parse(JSON.stringify(entity));
  }

  sendCpuToParent() {
    this.cpuToEmit.emit({product:this.cpuTemp, note:this.noteTemp});
  }

}
