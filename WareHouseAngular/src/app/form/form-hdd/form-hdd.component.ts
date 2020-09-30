import { Component, OnInit } from '@angular/core';
import { Hdd } from 'src/app/pcObjects/hdd/hdd';
import { HddService } from 'src/app/service/service-hdd/hdd.service';

@Component({
  selector: 'app-form-hdd',
  templateUrl: './form-hdd.component.html',
  styleUrls: ['./form-hdd.component.scss']
})
export class FormHddComponent implements OnInit {

  hdd: Hdd;

  constructor(private hddService: HddService) {
    this.hdd = new Hdd();
   }

   onsubmit(): void {

    this.hddService.save(this.hdd).subscribe(result => console.log("HDD CARICATA CON SUCCESSO"));
  }

  ngOnInit(): void {
  }

}
