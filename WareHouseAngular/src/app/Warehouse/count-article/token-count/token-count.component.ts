import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/service-token/token.service';
import { ProductCount } from '../product-count';

@Component({
  selector: 'token-count',
  templateUrl: './token-count.component.html',
  styleUrls: ['./token-count.component.scss']
})
export class TokenCountComponent extends ProductCount implements OnInit {

  constructor(private tokenService: TokenService) {
    super(tokenService)
   }

  ngOnInit(): void {
    this.countProduct();
  }

}
