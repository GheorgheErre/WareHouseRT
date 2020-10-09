import { Component, OnInit } from '@angular/core';
import { MouseService } from 'src/app/service/service-mouse/mouse-service.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'app-mouse-count',
  templateUrl: './mouse-count.component.html',
  styleUrls: ['./mouse-count.component.scss']
})
export class MouseCountComponent extends ProductCount implements OnInit {

  constructor(private mouseService: MouseService) {
    super(mouseService)
   }

  ngOnInit(): void {
  this.countProduct();
  }

}
