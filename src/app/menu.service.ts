import { Injectable } from '@angular/core';

@Injectable()
export class MenuService{
    menus:string[];
    constructor(){

        this.menus=['Home','Login','Players','Team','MatchSchedule','PlayerData'];
    }
}
