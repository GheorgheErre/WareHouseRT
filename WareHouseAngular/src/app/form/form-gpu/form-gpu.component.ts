import { Component, OnInit } from '@angular/core';
import { Gpu } from 'src/app/pcObjects/gpu/gpu';
import { GpuService } from 'src/app/service/service-gpu/gpu.service';

@Component({
  selector: 'app-form-gpu',
  templateUrl: './form-gpu.component.html',
  styleUrls: ['./form-gpu.component.scss']
})
export class FormGpuComponent implements OnInit {

  gpu : Gpu;

  constructor(private gpuService: GpuService) {
    this.gpu = new Gpu();
   }

   onsubmit(): void {

    this.gpuService.save(this.gpu).subscribe(result => console.log("GPU CARICATA CON SUCCESSO"));
  }

  ngOnInit(): void {
  }

}
