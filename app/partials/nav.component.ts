import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { NgStyle } from 'angular2/common';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/partials/nav.component.html',
    styleUrls: ['app/partials/nav.component.css'],
    directives: [NgStyle]
})
export class NavComponent {
    title:string;
    showMenu:string = 'none';

    constructor(private _router:Router) {
        this.title = "Hub City Disc Golf";
    }

    toggleMenu() {
        this.showMenu = this.showMenu == 'block' ? 'none' : 'block';
    }

    navigate(route:string) {
        switch (route) {
            case 'dash':
                this._router.navigate(['Dashboard']);
                break;
            case 'cal':
                this._router.navigate(['Calendar']);
                break;
            case 'about':
                this._router.navigate(['About']);
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
        this.toggleMenu();
    }
}
