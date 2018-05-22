import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component01Component } from './component01/component01.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { GameDetailsComponent }  from './game-details/game-details.component';

const routes: Routes = [
  { path: 'detail/:id', component: GameDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'games', component: Component01Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
