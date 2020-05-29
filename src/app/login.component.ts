import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'login',
    template: `
    
        <h2>Login Component</h2>
        Enter Username: <input type='text' [(ngModel)]='name' /> <br><br>
        Enter Password: <input type='text' [(ngModel)]='password' /> <br><br>
        <button (click)='login()'>Login</button>

    `,
    //providers:[LoginService]
})
export class LoginComponent implements OnInit {
    
    name:string='';
    password:string='';
    constructor(private loginService:LoginService,private router:Router) { }

    login(){
        this.loginService.setUserName(this.name);
        if(this.name=="admin" || this.name=="Admin")
            this.router.navigate(['/players']);
        else
            this.router.navigate(['/home']);
    }
    ngOnInit(): void { }
}
