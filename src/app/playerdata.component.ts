import { PlayerDataService } from './playerdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'playerdata',
    template: `
    <h1>This data is being extracted from the players.json(json-server)</h1>
    <table border='2px solid black' align='center'>
    <tr>
        <th>PlayerId</th>
        <th>PlayerName</th>
        <th>PlayerPosition</th>
        <th>PlayerImage</th>
    </tr>
        <tr *ngFor="let player of players, let i=index">
            <td>{{player.playerId}}</td>
            <td>{{player.playerName}}</td>
            <td>{{player.playerPosition}}</td>
            <td><img [src]="player.playerImage" /></td>
        </tr>
    </table>`,
    styles: [`
    img{
        height:150px;
        width:150px;
    }`],
    providers:[PlayerDataService]
})
export class PlayerDataComponent implements OnInit {
    
    players:any;
    constructor(private playerDataService:PlayerDataService) { }

    ngOnInit(): void { 
        this.playerDataService.getPlayerData().subscribe(data=>{
            //alert(data);
            this.players=data;
        })
    }
}
