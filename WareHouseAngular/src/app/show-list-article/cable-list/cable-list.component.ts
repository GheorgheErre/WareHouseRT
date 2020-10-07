import { Component, OnInit } from '@angular/core';
import { Cable } from 'src/app/pcObjects/cable/cable';
import { CableService } from 'src/app/service/service-cable/cable.service';

@Component({
  selector: 'app-cable-list',
  templateUrl: './cable-list.component.html',
  styleUrls: ['./cable-list.component.scss']
})
export class CableListComponent implements OnInit {

  listCable: Cable[];

  constructor(private cableService: CableService) { }

  ngOnInit(): void {
    this.cableService.findAll().subscribe(list =>{
      this.listCable=list;
    })
  }

}
