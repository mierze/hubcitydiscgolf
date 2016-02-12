import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/partials/nav.component.html',
    styleUrls: ['app/partials/nav.component.css']
})
export class NavComponent {
    public title:string;
    public showMenu:boolean;

    constructor(private _router:Router) {
        this.title = "Hub City Disc Golf";
        this.showMenu = true;
    }

    toggleMenu() {
        this.showMenu = this.showMenu ? false : true;
    }

    navigate(route:string) {
        switch (route) {
            case 'dash':
                this._router.navigate(['Dashboard']);
                break;
            case 'events':
                this._router.navigate(['Events']);
                break;
            case 'cal':
                this._router.navigate(['Calendar']);
                break;
            case 'mem':
                this._router.navigate(['Members']);
                break;
            case 'courses':
                this._router.navigate(['Courses']);
                break;
            case 'gal':
                this._router.navigate(['Gallery']);
                break;
            default:
                break;
        }
    }

    mobile() {
        return window.innerWidth < 768 ? true : false;
    }
}