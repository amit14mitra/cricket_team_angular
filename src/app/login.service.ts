import { SessionStorage } from 'angular-web-storage';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoginService {

    @SessionStorage()
    userName:string;

    subj:Subject<string>=new Subject<string>();
    
    setUserName(name:string){
        this.userName=name;
        this.subj.next(this.userName);
    }
    getUserName():Observable<string>{
        return this.subj.asObservable();
    }
}