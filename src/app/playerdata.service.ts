import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerDataService {

    constructor(private httpClient:HttpClient){
    }

    getPlayerData():Observable<any>{
        
        return this.httpClient.get("http://localhost:8000/players");
    }
}