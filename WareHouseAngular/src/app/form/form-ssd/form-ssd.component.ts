import { Component, OnInit } from '@angular/core';
import { Ssd } from 'src/app/pcObjects/ssd/ssd';
import { SsdService } from 'src/app/service/service-ssd/ssd.service';

@Component({
  selector: 'app-form-ssd',
  templateUrl: './form-ssd.component.html',
  styleUrls: ['./form-ssd.component.scss']
})
export class FormSsdComponent implements OnInit {

  ssd: Ssd;

  constructor(private ssdService: SsdService) {
    this.ssd = new Ssd();
   }

   onsubmit(): void {

    this.ssdService.save(this.ssd).subscribe(result => console.log("SSD CARICATA CON SUCCESSO"));
  }

  ngOnInit(): void {
  }

}
