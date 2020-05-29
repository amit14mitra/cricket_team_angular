import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    template: `
    <div class="head">
        <h2> Welcome {{userName}} </h2>
    </div>`,
    styleUrls:['./app.component.css']
    
})
export class HeaderComponent implements OnInit {
    
    userName:string;

    constructor(private loginService:LoginService) {
        this.loginService.getUserName().subscribe(name => {
            this.userName=name;
        })
        this.userName=loginService.userName;
     }

    ngOnInit(): void { }
}
