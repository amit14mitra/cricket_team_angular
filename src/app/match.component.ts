import { MatchService } from './match.service';
import { Component, OnInit } from '@angular/core';
import { Match } from './match';
@Component({
    selector: 'matchschedule',
    template: `
    <h2>Upcoming Match Details Of India</h2>
    <table border='3px solid black' align='center'>
        <tr>
            <th>Match Type</th>
            <th>Match Ground</th>
            <th>Match Opposition</th>
            <th>Match Date</th>
        </tr>
        <tr *ngFor="let match of matches,let i=index">
            <td>{{match.type}}</td>
            <td>{{match.ground}}</td>
            <td>{{match.opposition}}</td>
            <td>{{match.date}}</td>
        </tr>
    </table>`,
    styles: [`
   table{
        display: 'inline-block';
        margin-left: 28em;
        padding-right:50px;
        text-align:center;
        width:50%;
        
      }
    table caption{
        text-align: center;
      }       
    th{
        text-align: center;
        background-color: #FF6F61;
        fontWeight: bold;
        height:50px;
      }
    tr{
        background-color:antiquewhite;
        height:50px;
    } 
    `],
    providers:[MatchService]
})
export class MatchComponent implements OnInit {
    
    matches:Match[];
    constructor(private matchService:MatchService) { 
        this.matches=this.matchService.getMatchDetails();
    }

    ngOnInit(): void { }
}
