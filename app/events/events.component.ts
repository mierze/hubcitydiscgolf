import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Event, EventService } from './event.service';
import { EventDetailComponent } from './event-detail.component';

@Component({
  selector: 'events',
  templateUrl: 'app/events/events.component.html',
  directives: [EventDetailComponent]
})
export class EventsComponent implements OnInit {
  public events: Event[];
  public selectedEvent: Event;

  constructor(private _eventService: EventService, private _router: Router) { }

  getEvents() {
    this.selectedEvent = undefined;
    this.events = [];

    this._eventService.getEvents().then(events => this.events = events);

    return this.events;
  }

  gotoDetail() {
    this._router.navigate(['EventDetail', { id: this.selectedEvent.id }]);
  }

  ngOnInit() {
    this.events = this.getEvents();
  }

  onSelect(event: Event) {
    this.selectedEvent = event;
  }
}
