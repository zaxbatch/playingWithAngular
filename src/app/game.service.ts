import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-games'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor(private messageService: MessageService) { }

  getGames(): Observable<Game[]> {
    // TODO: send the message _after_ fetching the games
    this.messageService.add('GameService: fetched games');
    return of(GAMES);
  }
}
