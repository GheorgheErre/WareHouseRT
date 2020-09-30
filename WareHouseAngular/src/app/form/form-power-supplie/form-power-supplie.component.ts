import { Component, OnInit } from '@angular/core';
import { Powersupplie } from 'src/app/pcObjects/powerSupplie/powersupplie';
import { PowerSupplieService } from 'src/app/service/service-powerSupplie/power-supplie.service';

@Component({
  selector: 'app-form-power-supplie',
  templateUrl: './form-power-supplie.component.html',
  styleUrls: ['./form-power-supplie.component.scss']
})
export class FormPowerSupplieComponent implements OnInit {

  powerSupplie : Powersupplie;

  constructor(private powerSupplieService: PowerSupplieService) {
    this.powerSupplie = new Powersupplie();
   }

   onsubmit(): void {

    this.powerSupplieService.save(this.powerSupplie).subscribe(result => console.log("POWER SUPPLIE CARICATA CON SUCCESSO"));
  }

  ngOnInit(): void {
  }

}
