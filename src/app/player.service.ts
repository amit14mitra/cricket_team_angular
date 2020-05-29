import { Player } from './player';
import { Injectable } from '@angular/core';
@Injectable()
export class PlayerService {

    private players:Player[];
    
    constructor(){
     
        var p1=new Player(1,"M. S. Dhoni","Wicketkeeper","./assets/images/dhoni.jpg");
        var p2=new Player(2,"Virat Kohli","Batsman","./assets/images/virat.jpg");
        var p3=new Player(3,"K. L. Rahul","Wicketkeeper","./assets/images/rahul.png");   
        var p4=new Player(4,"Rishabh Pant","Wicketkeeper","./assets/images/pant.png");
        var p5=new Player(5,"Rohit Sharma","Batsman","./assets/images/rohit.jpg");
        var p6=new Player(6,"Jasprit Bumrah","Bowler","./assets/images/bumrah.jpg");
        var p7=new Player(7,"Hardik Pandya","All Rounder","./assets/images/pandya.jpg");
        var p8=new Player(8,"Ravindra Jadeja","All Rounder","./assets/images/jadeja.png");
        var p9=new Player(9,"Mohammed Shami","Bowler","./assets/images/shami.jpg");
        var p10=new Player(10,"Mayank Agarwal","Batsman","./assets/images/mayank.jpg");
        var p11=new Player(11,"Yuzvendra Chahal","Bowler","./assets/images/chahal.jpg");
        var p12=new Player(12,"Bhuvneshwar Kumar","Bowler","./assets/images/kumar.jpg");
        var p13=new Player(13,"Ishant Sharma","Bowler","./assets/images/ishant.jpg");
        var p14=new Player(14,"Dinesh Karthik","Wicket Keeper","./assets/images/kartik.jpg");
        var p15=new Player(15,"Kedar Jadhav","Batsman","./assets/images/kedar.jpg");
        var p16=new Player(16,"Kuldeep Yadav","Bowler","./assets/images/yadav.jpg");

        this.players=new Array<Player>();
        this.players.push(p1);
        this.players.push(p2);
        this.players.push(p3);
        this.players.push(p4);
        this.players.push(p5);
        this.players.push(p6);
        this.players.push(p7);
        this.players.push(p8);
        this.players.push(p9);
        this.players.push(p10);
        this.players.push(p11);
        this.players.push(p12);
        this.players.push(p13);
        this.players.push(p14);
        this.players.push(p15);
        this.players.push(p16);
    }
    
    getPlayers():Player[]{
        return this.players;
    }

    
}