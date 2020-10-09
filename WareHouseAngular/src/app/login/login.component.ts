import { Component, OnInit } from '@angular/core';
import { faTimes, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faTimes = faTimes; /*icona che chiude la sidenav*/
  
}
