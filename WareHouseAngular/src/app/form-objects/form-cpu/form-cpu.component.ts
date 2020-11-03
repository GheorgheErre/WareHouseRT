import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cpu } from 'src/app/pcObjects/cpu/cpu';

@Component({
  selector: 'app-form-cpu',
  templateUrl: './form-cpu.component.html',
  styleUrls: ['./form-cpu.component.scss']
})
export class FormCpuComponent implements OnInit {

  @Input() cpu : Cpu;
  @Output() cpuToEmit = new EventEmitter<Cpu>();

  constructor() { }

  ngOnInit(): void {
  }

  sendCpuToParent() {
    this.cpuToEmit.emit(this.cpu);
}

}
