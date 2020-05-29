import { TeamService } from './team.service';
import { PlayerService } from './player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from './player';
@Component({
    selector: 'player',

    template: `
    <div id="myHeader">
          <header></header>
    </div>
    
    <h1>Indian Players</h1>
    <table border='3px solid black' align='center'>
        <tr>
            <th>PlayerId</th>
            <th>PlayerName</th>
            <th>PlayerPosition</th>
            <th>PlayerImage</th>
            <th colspan='2'>Actions</th>     
        </tr>
        <tr *ngFor="let player of players, let i=index">
            <td>{{player.id}}</td>
            <td>{{player.name}}</td>
            <td>{{player.position}}</td>
            <td><img [src]="player.image"/></td>
            <td><button *ngIf="isMember" (click)="showDetails(player)">Details</button></td>
            <td><addtoteam [selectedPlayer]="player"></addtoteam></td>
        </tr>
    </table>
    `,
    styles: [`
    img{
      width:auto;
      height:100px;
    }
    h1{
        text-indent:12em;
    }
 table{
      display: 'inline-block';
      float: right;
      margin-left: 50px;
      padding-right:50px;
    }
      table caption{
      text-align: center;
    }       
      th{
      text-align: center;
      background-color: peachpuff;
      fontWeight: bold;
    }
    div{
      float: right;
      width: 300px;
      margin-top: 150px;
      margin-right:200px;
    }
    #myHeader{
      position:relative;
      top:0;
      right:0; 
    }`] ,
    providers:[PlayerService,TeamService]
})
export class PlayerComponent implements OnInit {
    
    players:Player[];
    isMember:boolean=true;
    constructor(private playerService:PlayerService) {
        this.players=playerService.getPlayers();
     }

    showDetails(player){
        alert(player.id+' '+player.name+' '+player.position);
    }
    ngOnInit(): void { }
}
