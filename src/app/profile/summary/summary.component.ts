import { CardService } from './../../cards/card.service';
import { Component } from '@angular/core';
import { card } from 'src/app/cards/card';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  listCards: card[] = [];

  constructor(private service: CardService){

  }

  ngOnInit(): void{
    this.service.onList().subscribe((listCards) => {
      this.listCards = listCards;
      console.log(this.listCards)
    });
  }
}
