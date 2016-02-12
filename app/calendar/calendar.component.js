System.register(['angular2/core', 'angular2/router', 'angular2/common'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1;
    var CalendarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CalendarComponent = (function () {
                function CalendarComponent(_router) {
                    this._router = _router;
                }
                CalendarComponent.prototype.ngOnInit = function () {
                    this.date = new Date();
                    this.cd = this.date.getDate();
                    this.cm = this.date.getMonth();
                    this.yr = this.date.getFullYear();
                    this.dow = this.date.getDay();
                    this.nxtDate = new Date(this.yr, this.cm, 1);
                    this.setVars();
                    this.loadCalendar();
                };
                CalendarComponent.prototype.setVars = function () {
                    this.days = [];
                    this.month = this.getMonth(this.nxtDate.getMonth());
                };
                CalendarComponent.prototype.loadCalendar = function () {
                    var i = 0;
                    while (i < this.getNumDays(this.cm)) {
                        var iDow = this.nxtDate.getDay();
                        if (i == 0) {
                            var j = 0;
                            while (j++ < iDow) {
                                this.days.push({
                                    "date": new Date(this.yr, this.cm, this.getNumDays(this.cm - 1) + j - iDow),
                                    "events": "",
                                    "dow": j
                                });
                            }
                        }
                        var iDate = new Date(this.yr, this.cm, this.nxtDate.getDate());
                        if (iDow == 5) {
                            this.days.push({ "date": iDate, "events": "7pm Putting League @ Croft Baptist", "dow": iDow });
                        }
                        else if (iDow == 6) {
                            if (iDate.getDate() % 2)
                                this.days.push({ "date": iDate, "events": "Shoally Creek Doubles @ 10AM", "dow": iDow });
                            else
                                this.days.push({ "date": iDate, "events": "Pipeline Doubles @ 10AM", "dow": iDow });
                        }
                        else if (iDow == 0) {
                            if (iDate.getDate() % 2)
                                this.days.push({ "date": iDate, "events": "Pipeline Tags @ 2PM", "dow": iDow });
                            else
                                this.days.push({ "date": iDate, "events": "Tyger River Tags @ 2PM", "dow": iDow });
                        }
                        else
                            this.days.push({ "date": iDate, "events": "", "dow": iDow });
                        i++;
                        this.nxtDate.setDate(this.nxtDate.getDate() + 1);
                    }
                };
                CalendarComponent.prototype.getDoW = function (x) {
                    var diff = x - 1;
                    var offset = this.nxtDate.getDay() + diff;
                    if (offset < 0)
                        offset += 7;
                    return (offset) % 7;
                };
                CalendarComponent.prototype.getNumDays = function (m) {
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
                };
                CalendarComponent.prototype.getDay = function (dow) {
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
                };
                CalendarComponent.prototype.getMonth = function (dow) {
                    var year = (this.yr == (new Date()).getFullYear()) ? '' : (' ' + this.yr);
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
                };
                CalendarComponent.prototype.goTo = function (m) {
                    if (m < 0) {
                        this.cm = 11;
                        this.yr--;
                    }
                    else if (m > 11) {
                        this.cm = 0;
                        this.yr++;
                    }
                    else {
                        this.cm = m;
                    }
                    //update date
                    this.nxtDate = new Date(this.yr, this.cm, 1);
                    this.setVars();
                    this.loadCalendar();
                };
                CalendarComponent = __decorate([
                    core_1.Component({
                        selector: 'calendar',
                        templateUrl: 'app/calendar/calendar.component.html',
                        styleUrls: ['app/calendar/calendar.component.css'],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], CalendarComponent);
                return CalendarComponent;
            }());
            exports_1("CalendarComponent", CalendarComponent);
        }
    }
});
