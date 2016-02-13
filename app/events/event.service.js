System.register(['angular2/core', './events'], function(exports_1) {
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
    var core_1, events_1;
    var EventService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            }],
        execute: function() {
            EventService = (function () {
                function EventService() {
                }
                EventService.prototype.getEvents = function () {
                    return events_1.EVENTS;
                };
                EventService.prototype.getEvent = function (id) {
                    return Promise.resolve(events_1.EVENTS).then(function (events) { return events.filter(function (h) { return h.id === id; })[0]; });
                };
                EventService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EventService);
                return EventService;
            }());
            exports_1("EventService", EventService);
        }
    }
});
