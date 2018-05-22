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
    // TODO: send the message _after_ fetching the game
    this.messageService.add('GameService: fetched game id=${id}');
    return of(GAMES);
  }

  getGame(id: number): Observable<Game> {
    // TODO: send the message _after_ fetching the game
    this.messageService.add(`GameService: fetched game id=${id}`);
    return of(GAMES.find(game => game.id === id));
  }

}
