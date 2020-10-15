import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
 
  login = false;
  openLogin(){
    this.login = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
