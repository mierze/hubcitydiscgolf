import { Component, OnInit } from 'angular2/core';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { Event, EventService } from './event.service';

@Component({
  selector: 'event-detail',
  templateUrl: 'app/events/event-detail.component.html',
  directives: [ROUTER_DIRECTIVES],
  inputs: ['event']
})
export class EventDetailComponent implements OnInit {
  public event: Event;

  constructor(private _eventService: EventService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    if (!this.event) {
      let id = +this._routeParams.get('id');
      this._eventService.getEvent(id).then(event => this.event = event);
    }
  }
}
