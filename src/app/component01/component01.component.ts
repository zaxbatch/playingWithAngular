import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component implements OnInit {
  //games = GAMES;
  selectedGame: Game;
  games: Game[];

  constructor(private gameService: GameService) {

    }

  ngOnInit() {
    this.getGames();
  }

  onSelect(game: Game): void {
    this.selectedGame = game;
  }

  getGames(): void {
    this.gameService.getGames()
      .subscribe(games => this.games = games);
  }
}
