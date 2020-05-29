import { Match } from './match';
import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

    matches:Match[];
    constructor(){
        var m1=new Match("T20","Perth Stadium, Perth","South Africa","24/10/2020");
        var m2=new Match("T20","Melbourne Cricket Ground (MCG), Melbourne","England","01/11/2020");
        var m3=new Match("T20","Sydney Cricket Ground (SCG), Sydney","Afganisthan","08/11/2020");
        var m4=new Match("ODI","Ekana Cricket Stadium","South Africa","26/08/2020");
        var m5=new Match("Test","Basin Reserve Stadium","New Zealand","20/09/2020");

        this.matches=new Array<Match>();
        this.matches.push(m1);
        this.matches.push(m2);
        this.matches.push(m3);
        this.matches.push(m4);
        this.matches.push(m5);
    }
    getMatchDetails():Match[]{
        return this.matches;
    }
}