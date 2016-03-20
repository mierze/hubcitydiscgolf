System.register(['angular2/core', 'angular2/common', "./date.service", '../events/event.service'], function(exports_1) {
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
    var core_1, common_1, date_service_1, event_service_1;
    var CalendarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (date_service_1_1) {
                date_service_1 = date_service_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            CalendarComponent = (function () {
                function CalendarComponent(_dateService, _eventService) {
                    this._dateService = _dateService;
                    this._eventService = _eventService;
                    this.showModal = false;
                }
                CalendarComponent.prototype.ngOnInit = function () {
                    this.date = new Date();
                    this.nextM = this.date.getMonth();
                    this.nextY = this.date.getFullYear();
                    this.events = this._eventService.getEvents();
                    this.setVars();
                    this.loadCalendar();
                };
                CalendarComponent.prototype.setVars = function () {
                    this.days = []; //reset for new population
                    this.title = this._dateService.getMonth(this.nextM, this.nextY, this.date.getFullYear());
                };
                CalendarComponent.prototype.loadCalendar = function () {
                    var nextDate = new Date(this.nextY, this.nextM, 1);
                    for (var i = 0; i < this._dateService.getNumDays(this.nextM); i++) {
                        var d = new Date(nextDate.getTime()); //shallow copy
                        if (i == 0) {
                            var j = 0;
                            while (j++ < d.getDay()) {
                                this.days.push({
                                    "date": new Date(this.nextY, (this.nextM - 1), this._dateService.getNumDays(this.nextM - 1) + j - d.getDay()),
                                    "events": null
                                });
                            }
                        }
                        //adding events
                        this.addEvents(d);
                        nextDate.setDate(nextDate.getDate() + 1);
                    }
                };
                CalendarComponent.prototype.addEvents = function (d) {
                    var daysEvents = [];
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
                                        daysEvents[0] = this.events[e]; //overwrites a league
                    this.days.push({ "date": d, "events": daysEvents });
                };
                CalendarComponent.prototype.goTo = function (m) {
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
                };
                CalendarComponent.prototype.cellModal = function (day) {
                    if (day.events.length) {
                        this.daySelected = day;
                        this.toggleDetails();
                    }
                };
                CalendarComponent.prototype.toggleDetails = function () {
                    this.showModal = this.showModal ? false : true;
                };
                CalendarComponent = __decorate([
                    core_1.Component({
                        selector: 'calendar',
                        templateUrl: 'app/calendar/calendar.component.html',
                        styleUrls: ['app/calendar/calendar.component.css'],
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [date_service_1.DateService, event_service_1.EventService])
                ], CalendarComponent);
                return CalendarComponent;
            }());
            exports_1("CalendarComponent", CalendarComponent);
        }
    }
});
