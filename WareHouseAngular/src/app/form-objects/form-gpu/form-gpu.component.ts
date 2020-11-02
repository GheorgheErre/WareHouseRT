import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gpu } from 'src/app/pcObjects/gpu/gpu';

@Component({
  selector: 'app-form-gpu',
  templateUrl: './form-gpu.component.html',
  styleUrls: ['./form-gpu.component.scss']
})
export class FormGpuComponent implements OnInit {

  @Input() gpu : Gpu;
  @Output() gpuToEmit = new EventEmitter<Gpu>();

  constructor() { }

  ngOnInit(): void {
  }

  sendGpuToParent() {
    this.gpuToEmit.emit(this.gpu);
}

}
