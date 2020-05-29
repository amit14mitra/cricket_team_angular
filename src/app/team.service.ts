import { Subject } from 'rxjs';
import { SessionStorage } from 'angular-web-storage';
import { Player } from './player';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {


    team:Player[];// Javascript Object

    @SessionStorage()
    myTeam:string; // JSON String

    // Subject
    private teamSource = new Subject<string>();

    // BroadCaster
    teamBroadCaster = this.teamSource.asObservable();

    constructor(){
        console.log(this.myTeam);
        if(this.myTeam){
            this.team = JSON.parse(this.myTeam);
        }
        else{
            this.team = new Array<Player>();// this.cart = [];
        }
    }
    addToTeam(player:Player):void{
        this.team = this.team.concat(player);// immutable state
        alert('Added to the team '+player.name);
        this.myTeam = JSON.stringify(this.team);
        
        // Notify all the subscribers
        this.teamSource.next(this.myTeam);
    }
    getPlayers():Player[]{        
        return this.team;
    }
    removeFromTeam(index:number):void{
        this.team.splice(index,1);
        alert('Removed from the Team');
        this.myTeam = JSON.stringify(this.team);

        // Notify all the subscribers
        this.teamSource.next(this.myTeam);
    }
}