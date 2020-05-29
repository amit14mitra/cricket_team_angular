import { TeamService } from './team.service';
import { Player } from './player';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'teamdetails',
    template: `
    <h1>Team Details</h1><br><br><br><br>
        <table border="3px solid black" align="center">
            <tr>
                <th>PlayerId</th>
                <th>PlayerName</th>
                <th>ProductPosition</th>
                <th>PlayerImage</th>     
                <th>Action</th>
            </tr>
            <tr *ngFor="let player of teamPlayers, let i=index">
                <td>{{player.id}}</td>
                <td><a [routerLink]="['playerdetails',player.id]">{{player.name}}</a></td>
                <td>{{player.position}}</td>
                <td><img [src]="player.image" /></td>
                <td><button (click)='remove(i)'>Remove</button></td>
            </tr>
        </table>
        <div>
            <router-outlet></router-outlet>
        </div>
        `,
    styles: [`
    img{
        width:auto;
        height:100px;
    }
    th{
        text-align:left;
        background-color:peachpuff;
        fontWeight:bold;
    }
    table,h1{
        float:left;
    }`],
    providers:[TeamService]
})
export class TeamDetailsComponent implements OnInit {
    
    teamPlayers:Player[];
    constructor(private teamService:TeamService) {
        teamService.teamBroadCaster.subscribe(res => {
            //alert(res);
            this.teamPlayers = JSON.parse(res);
        })        
        //alert(this.teamPlayers);
        this.teamPlayers = teamService.getPlayers();  
        //alert(this.teamPlayers);              
     }
     
     remove(index):void{
        this.teamService.removeFromTeam(index);
     }

    ngOnInit(): void { }
}
