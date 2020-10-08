import { Component, OnInit } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class tokenListComponent extends ProductList implements OnInit {

  constructor(private tokenService:  TokenService) {
    super(tokenService); }

  ngOnInit(): void {
    this.findAllProduct();
  }

}
