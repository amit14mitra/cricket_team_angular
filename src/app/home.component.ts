import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
    <header></header>
    <div class="cricket">
    <img id="i1" src="./assets/images/india.jpg">
        
     <span>
         <br><br>The India men's national cricket team, also known as Team India and Men in Blue, 
            is governed by the Board of Control for Cricket in India (BCCI),<br> 
            and is a Full Member of the International Cricket Council (ICC) with Test, 
             One-Day International (ODI) and Twenty20 International (T20I) status.</span><br>
            
             <p><mark style="color:crimson;">Sport: Test cricket<br>

             League: International Cricket Council<br>

             Championships: 2011 Cricket World Cup<br></mark></p>

            <span> A One Day International (ODI) is an international cricket match between two representative teams, each having ODI status, 
             as determined by the International Cricket Council (ICC). <br>An ODI differs from Test matches in that the number of overs per team is limited, 
             nd that each team has only one innings.</span>

<span>India played their first ODI in 1974 and a total of 229 players have represented the team.<br> Since 1974 India has played 978 ODIs, 
resulting in 509 victories, 419 defeats, 9 ties and 41 no results. <br>
India registered their first series victory against England in a 3-match series by 2–1 in 1981.
India won the Cricket World Cup twice in 1983 and 2011 and was runner-up in 2003.<br> India won the ICC Champions 
Trophy in the year 2013 and had earlier shared once with Sri Lanka in 2002 because rain washed out the attempt to complete the final twice.<br  >India was also runner-up in 2000.
India have won the Asia Cup (in ODI format) a total of six times in 1984, 1988, 1990, 1995, 2010 and 2018.
     </span>
</div>
    `,
    styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
