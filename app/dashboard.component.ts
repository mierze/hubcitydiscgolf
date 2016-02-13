import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Event, EventService } from './events/event.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public events:Event[] = [];

    constructor(private _eventService:EventService, private _router:Router) {
    }

    ngOnInit() {
        this.events = this._eventService.getEvents().slice(0,5);
    }

    gotoDetail(event:Event) {
        this._router.navigate(['EventDetail', {id: event.id}]);
    }
}
