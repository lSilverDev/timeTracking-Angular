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

  constructor(private service: CardService){}

  ngOnInit(): void{
    this.service.onList().subscribe((listCards) => {
      this.listCards =  this.organizaLista(listCards);
      console.log(listCards[0])
    });
  }

  organizaLista(listCards: card[]){
      listCards.forEach(element => {
        var resultArray = Object.keys(element.timeframes).map((time: any) => {
          let person = element.timeframes[time];
          return person;
        });
        element.timeframes = resultArray;
      });
      return listCards;
  }

}
