import { CardService } from '../cards/card.service';
import { Component, Input } from '@angular/core';
import { card } from 'src/app/cards/card';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  listCards: card[] = [];
  time: number = 0;

  constructor(private service: CardService){}

  ngOnInit(): void{
    this.service.onList().subscribe((listCards) => {
      this.listCards =  this.organizaLista(listCards);
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

  changeRole(time: number){
    this.time = time;
  }
}
