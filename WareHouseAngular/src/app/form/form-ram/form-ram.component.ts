import { Component, OnInit } from '@angular/core';
import { Ram } from 'src/app/pcObjects/ram/ram';
import { RamService } from 'src/app/service/service-ram/ram.service';

@Component({
  selector: 'app-form-ram',
  templateUrl: './form-ram.component.html',
  styleUrls: ['./form-ram.component.scss']
})
export class FormRamComponent implements OnInit {

  ram : Ram;

  constructor(private ramService: RamService) {
    this.ram = new Ram();
   }

   onsubmit(): void {

    this.ramService.save(this.ram).subscribe(result => console.log("RAM CARICATA CON SUCCESSO"));
  }

  ngOnInit(): void {
  }

}
