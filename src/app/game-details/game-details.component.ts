import { Component, OnInit, Input } from '@angular/core';
import { Game } from "../game";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() game: Game;
}
