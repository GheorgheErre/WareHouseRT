import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gpu } from 'src/app/pcObjects/gpu/gpu';

@Component({
  selector: 'app-form-gpu',
  templateUrl: './form-gpu.component.html',
  styleUrls: ['./form-gpu.component.scss']
})
export class FormGpuComponent implements OnInit {

  @Output() gpuToEmit = new EventEmitter<Gpu>();
  gpuTemp = new Gpu();

  constructor() { }

  ngOnInit(): void {
  }

  setGpu(entity): void {
    this.gpuTemp = JSON.parse(JSON.stringify(entity));
  }

  sendGpuToParent() {
    this.gpuToEmit.emit(this.gpuTemp);
}

}
