import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-games';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component implements OnInit {
  games = GAMES;

  /*
  game: Game = {
    id: 1,
    title: 'Mario',
    rating: 4.5
  }
*/
  constructor() {

    }

  ngOnInit() {
  }

}
