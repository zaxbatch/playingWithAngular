import { Component, OnInit } from '@angular/core';
import { Store } from '../store'

@Component({
  selector: 'app-component02',
  templateUrl: './component02.component.html',
  styleUrls: ['./component02.component.css']
})
export class Component02Component implements OnInit {
  store: Store = {
    id: 1,
    name: 'GameJunkie',
    address: '1234 Game St. Funville'
  }

  constructor() { }

  ngOnInit() {
  }

}
