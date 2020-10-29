import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-workstation-header',
  templateUrl: './workstation-header.component.html',
  styleUrls: ['./workstation-header.component.scss']
})
export class WorkstationHeaderComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
