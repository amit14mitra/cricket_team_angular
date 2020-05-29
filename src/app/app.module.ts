import { PlayerDataComponent } from './playerdata.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchComponent } from './match.component';
import { PlayerDetailsComponent } from './playerdetails.component';
import { TeamDetailsComponent } from './teamdetails.component';
import { AddToTeamComponent } from './addtoteam.component';
import { PlayerComponent } from './player.component';
import { LoginService } from './login.service';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { LoginComponent } from './login.component';

let routes:Routes = [
  {
    path:'', //default path
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'players',
    component:PlayerComponent
  },
  {
    path:'team',
    component:TeamDetailsComponent,
    children:[{
      path:'playerdetails/:id',
      component:PlayerDetailsComponent
    }]
  },
  {
    path:'matchschedule',
    component:MatchComponent
  },
  {
    path:'playerdata',
    component:PlayerDataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,HomeComponent,LoginComponent,
    HeaderComponent,PlayerComponent,AddToTeamComponent,
    TeamDetailsComponent,PlayerDetailsComponent,MatchComponent,PlayerDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),FormsModule,HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
