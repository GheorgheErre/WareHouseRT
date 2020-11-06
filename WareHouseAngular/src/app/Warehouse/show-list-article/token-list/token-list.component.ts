import { Component, OnInit, ViewChild } from '@angular/core';
import { FormTokenComponent } from 'src/app/form-objects/form-token/form-token.component';
import { Token } from 'src/app/pcObjects/token/token';
import { TokenService } from 'src/app/service/service-token/token.service';
import { WorkStationService } from 'src/app/service/service-workStation/work-station.service';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.scss']
})
export class TokenListComponent extends ProductList implements OnInit {

  @ViewChild(FormTokenComponent) formTokenComponent: FormTokenComponent;

  constructor(private tokenService: TokenService, protected workstationService: WorkStationService) {
    super(tokenService, workstationService);
    this.entity = new Token()
  }

  ngOnInit(): void {
    this.findAllProduct();
  }

  onUpdateButton(entity: Token) {
    this.entity = entity;
    this.formTokenComponent.setToken(this.entity);

  }

  onAddArticleButton() {
    this.entity = new Token();
  }
}
