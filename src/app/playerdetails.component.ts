import { ActivatedRoute } from '@angular/router';
import { TeamService } from './team.service';
import { Player } from './player';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'playerdetails',
    template: `
    
    <h1 style="color:red;">Player Info of Id: {{playerid}}</h1>
    <div *ngFor="let player of players">
        <div id="dot" *ngIf="player.id === playerid">
            <span >{{player.name}}</span>
            <span >{{player.position}}</span>
            <img [src]="player.image" />
        </div>
    </div>
    `,
    styles: [`
    img{
        width:150px;
        height:150px;
        border:3px solid black;
        margin:0px 20px;
    }
    span{
        font-size:20px;
        color:red;
        width:auto;
        margin:10px;
    }
    div{
        font-weight:bold;
        font-style:italic;
    }
    `],
})
export class PlayerDetailsComponent implements OnInit {
    
    playerid:number;
    players:Player[];

    constructor(private teamService:TeamService,private activatedRoute:ActivatedRoute) {

        this.players=teamService.getPlayers();
        
     }

    ngOnInit(): void {

        this.activatedRoute.params.subscribe(parameter=>{
            //alert(parameter);
            this.playerid=parseInt(parameter['id']);
        })
     }
}
