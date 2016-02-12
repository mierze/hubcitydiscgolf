import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CalendarCell } from './partials/cell';
import { NgClass } from 'angular2/common';

@Component({
    selector: 'calendar',
    templateUrl: 'app/calendar/calendar.component.html',
    styleUrls: ['app/calendar/calendar.component.css'],
    directives: [NgClass]
})
export class CalendarComponent implements OnInit {
    cd:number;
    dow:number;
    month:string;
    date:any;
    days:day[];
    cm:number;
    yr:number;
    nxtDate:Date;

    constructor(private _router:Router) {

    }

    ngOnInit() {
        this.date = new Date();
        this.cd = this.date.getDate();
        this.cm = this.date.getMonth();
        this.yr = this.date.getFullYear();
        this.dow = this.date.getDay();
        this.nxtDate = new Date(this.yr, this.cm, 1);
        this.setVars();
        this.loadCalendar();
    }

    setVars() {
        this.days = [];
        this.month = this.getMonth(this.nxtDate.getMonth());
    }

    loadCalendar() {
        let i = 0;
        while (i < this.getNumDays(this.cm)) {
            let iDow = this.nxtDate.getDay();
            if (i == 0) {
                let j = 0;
                while (j++ < iDow) {
                    this.days.push({
                        "date": new Date(this.yr, this.cm, this.getNumDays(this.cm - 1) + j - iDow),
                        "events": "",
                        "dow": j
                    });
                }
            }
            let iDate = new Date(this.yr, this.cm, this.nxtDate.getDate());
            if (iDow == 5) {
                this.days.push({"date": iDate, "events": "7pm Putting League @ Croft Baptist", "dow": iDow});
            }
            else if (iDow == 6) {
                if (iDate.getDate() % 2)
                    this.days.push({"date": iDate, "events": "Shoally Creek Doubles @ 10AM", "dow": iDow});
                else
                    this.days.push({"date": iDate, "events": "Pipeline Doubles @ 10AM", "dow": iDow});

            }
            else if (iDow == 0) {
                if (iDate.getDate() % 2)
                    this.days.push({"date": iDate, "events": "Pipeline Tags @ 2PM", "dow": iDow});
                else
                    this.days.push({"date": iDate, "events": "Tyger River Tags @ 2PM", "dow": iDow});
            } else
                this.days.push({"date": iDate, "events": "", "dow": iDow});
            i++;

            this.nxtDate.setDate(this.nxtDate.getDate() + 1);
        }
    }

    getDoW(x:number) {
        let diff = x - 1;
        let offset = this.nxtDate.getDay() + diff;
        if (offset < 0)
            offset += 7;
        return (offset) % 7;
    }

    getNumDays(m:number) {
        switch (m) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31;
                break;
            case 1:
                return 28;
                break;
            default:
                return 30;
        }
    }

    getDay(dow:number) {
        switch (dow) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    }

    getMonth(dow:number) {
        let year = (this.yr == (new Date()).getFullYear()) ? '' : (' ' + this.yr);
        switch (dow) {
            case 0:
                return 'January' + year;
            case 1:
                return 'February' + year;
            case 2:
                return 'March' + year;
            case 3:
                return 'April' + year;
            case 4:
                return 'May' + year;
            case 5:
                return 'June' + year;
            case 6:
                return 'July' + year;
            case 7:
                return 'August' + year;
            case 8:
                return 'September' + year;
            case 9:
                return 'October' + year;
            case 10:
                return 'November' + year;
            case 11:
                return 'December' + year;
            default:
                return '...';
        }
    }

    goTo(m:number) {
        if (m < 0) {
            this.cm = 11;
            this.yr--;
        }
        else if (m > 11) {
            this.cm = 0;
            this.yr++;
        } else {
            this.cm = m;
        }
        //update date
        this.nxtDate = new Date(this.yr, this.cm, 1);

        this.setVars();
        this.loadCalendar();
    }
}

interface day {
    date: Date;
    events: string;
    "dow": number;
}