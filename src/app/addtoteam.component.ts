import { TeamService } from './team.service';
import { Player } from './player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'addtoteam',
    template: `
    <button (click)="addToTeam()">Add To Team</button>`,
    //styleUrls: ['./name.component.scss']
})
export class AddToTeamComponent implements OnInit {
    
    @Input()
    selectedPlayer:Player;

    constructor(private teamService:TeamService) { }

    addToTeam(){
        this.teamService.addToTeam(this.selectedPlayer);
    }
    ngOnInit(): void { }
}
