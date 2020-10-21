import { Component, OnInit } from '@angular/core';
import { Token } from 'src/app/pcObjects/token/token';
import { TokenService } from 'src/app/service/service-token/token.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent extends ProductList implements OnInit {

  constructor(private tokenService: TokenService) {
    super(tokenService);
    this.entity = new Token()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Token) {
    this.entity = entity;
    this.update = true;
  }

  onAddArticleButton() {
    this.entity = new Token();
    this.update = false;
  }
}
