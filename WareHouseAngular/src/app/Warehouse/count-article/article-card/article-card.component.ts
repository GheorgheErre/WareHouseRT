import { Component, OnInit } from '@angular/core';
import { CardList } from './card-list';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent extends CardList implements OnInit {

  
  cardName: String;

  constructor() {
    super();
  }
  ngOnInit(): void {
  }


}
