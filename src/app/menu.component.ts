import { MenuService } from './menu.service';
import { Component} from '@angular/core';

@Component({
    selector: 'menu',
    template: ` <div class="container">
    <nav class="navbar navbar-inverse">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                Indian Cricket Team Selection
            </a>
        </div>
        <ul class="nav navbar-nav">
              <li *ngFor="let item of menus">
                <a routerLink="{{item | lowercase }}">{{item}}</a>
              </li>          
        </ul>
    </nav>
</div>`,
    providers:[MenuService],

    styleUrls: ['./app.component.css'] 
})
export class MenuComponent{
    menus:string[];
    constructor(menuService:MenuService) { 
        
        this.menus=menuService.menus;
    }
}
