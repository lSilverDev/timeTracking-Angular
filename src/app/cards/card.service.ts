import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { card } from './card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly API = 'http://localhost:1919/cards';

  constructor(private http: HttpClient) { }

  onList(): Observable<card[]>{
    return this.http.get<card[]>(this.API);
  }
}
