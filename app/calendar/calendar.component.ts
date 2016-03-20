import { Component, OnInit } from 'angular2/core';
import { NgClass } from 'angular2/common';
import { DateService } from "./date.service";
import { Event, EventService } from '../events/event.service';

@Component({
    selector: 'calendar',
    templateUrl: 'app/calendar/calendar.component.html',
    styleUrls: ['app/calendar/calendar.component.css'],
    directives: [NgClass]
})
export class CalendarComponent implements OnInit {
    title:string;
    date:Date;
    showModal:boolean = false;
    days:Day[];
    daySelected:Day;
    nextM:number;
    nextY:number;
    events:Event[];

    constructor(private _dateService:DateService, private _eventService:EventService) {
    }

    ngOnInit() {
        this.date = new Date();
        this.nextM = this.date.getMonth();
        this.nextY = this.date.getFullYear();
        this.events = this._eventService.getEvents();
        this.setVars();
        this.loadCalendar();
    }

    setVars() {
        this.days = []; //reset for new population
        this.title = this._dateService.getMonth(this.nextM, this.nextY, this.date.getFullYear());
    }

    loadCalendar() {
        let nextDate = new Date(this.nextY, this.nextM, 1);
        for (let i = 0; i < this._dateService.getNumDays(this.nextM); i++) {
            let d = new Date(nextDate.getTime()); //shallow copy
            if (i == 0) {
                let j = 0;
                while (j++ < d.getDay()) {
                    this.days.push({
                        "date": new Date(this.nextY, (this.nextM-1), this._dateService.getNumDays(this.nextM - 1) + j - d.getDay()),
                        "events": null
                    });
                    }
            }
            //adding events
            this.addEvents(d);
            nextDate.setDate(nextDate.getDate() + 1);
        }
    }

    addEvents(d:Date) {
        let daysEvents:Event[] = [];
        for (var e in this.events)
            if (this.events[e].repeat.length) {
                if (this.events[e].repeat[0] == d.getDay().toString()) {
                    if (this.events[e].repeat[1]) {
                        if (this.events[e].repeat[1] == 'a' && !(d.getDate() % 2))
                            daysEvents.push(this.events[e]);
                        else if (this.events[e].repeat[1] == 'b' && d.getDate() % 2)
                            daysEvents.push(this.events[e]);
                    }
                    else
                        daysEvents.push(this.events[e]);
                }
            }
            else if (this.events[e].date != null)
                if (this.events[e].date.getDate() == d.getDate())
                    if (this.events[e].date.getMonth() == d.getMonth())
                        if (this.events[e].date.getFullYear() == d.getFullYear())
                            daysEvents[0] = this.events[e];//overwrites a league
        this.days.push({"date": d, "events": daysEvents});
    }

    goTo(m:number) {
        if (m < 0) {
            this.nextM = 11;
            this.nextY--;
        }
        else if (m > 11) {
            this.nextM = 0;
            this.nextY++;
        }
        else
            this.nextM = m;

        this.setVars();
        this.loadCalendar();
    }

    cellModal(day:Day) {
        if (day.events.length) {
            this.daySelected = day;
            this.toggleDetails();
        }
    }

    toggleDetails() {
        this.showModal = this.showModal ? false : true;
    }
}

interface Day {
    date: Date;
    events: Event[];
}
