import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CalendarCell } from './partials/cell';

@Component({
    selector: 'calendar',
    templateUrl: 'app/calendar/calendar.component.html',
    styleUrls: ['app/calendar/calendar.component.css']
})
export class CalendarComponent implements OnInit {
    public title: string;
    public tDate: any;
    public days: any[] = [];
    constructor(private _router:Router) {
        let i = 0;
        while (i++ < 31) {
            this.days[i] = i;
        }
    }

    ngOnInit() {
        this.title = 'CALENDAR TITLE';
        this.tDate = new Date();
    }
}