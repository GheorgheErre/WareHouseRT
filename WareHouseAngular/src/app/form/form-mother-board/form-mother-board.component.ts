import { Component, OnInit } from '@angular/core';
import { Motherboard } from 'src/app/pcObjects/motherBoard/motherboard';
import { MotherBoardService } from 'src/app/service/service-motherBoard/mother-board.service';

@Component({
  selector: 'app-form-mother-board',
  templateUrl: './form-mother-board.component.html',
  styleUrls: ['./form-mother-board.component.scss']
})
export class FormMotherBoardComponent implements OnInit {

  motherBoard : Motherboard;

  constructor(private motherBoardService: MotherBoardService) {
    this.motherBoard = new Motherboard();
   }

   onsubmit(): void {

    this.motherBoardService.save(this.motherBoard).subscribe(result => console.log("MOTHERBOARD CARICATA CON SUCCESSO"));
  }

  ngOnInit(): void {
  }

}
