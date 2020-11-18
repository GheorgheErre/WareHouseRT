import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowUp, faArrowDown, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'workstation-welcome',
  templateUrl: './workstation-welcome.component.html',
  styleUrls: ['./workstation-welcome.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class WorkstationWelcomeComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  selectedFloor = "ground";

 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOffice(path:string){
    this.router.navigate([path]);
  }

  create(){
    this.router.navigate(["/CreateWorkstation"]);
  }

  setFloorImage(floor){
    this.selectedFloor = floor;
  }

 

}
