System.register(['angular2/core', 'angular2/router', './event.service', './event-detail.component'], function(exports_1) {
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
    var core_1, router_1, event_service_1, event_detail_component_1;
    var EventsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (event_detail_component_1_1) {
                event_detail_component_1 = event_detail_component_1_1;
            }],
        execute: function() {
            EventsComponent = (function () {
                function EventsComponent(_eventService, _router) {
                    this._eventService = _eventService;
                    this._router = _router;
                }
                EventsComponent.prototype.getEvents = function () {
                    this.selectedEvent = undefined;
                    this.events = [];
                    this.events = this._eventService.getEvents();
                    return this.events;
                };
                EventsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['EventDetail', { id: this.selectedEvent.id }]);
                };
                EventsComponent.prototype.ngOnInit = function () {
                    this.events = this.getEvents();
                };
                EventsComponent.prototype.onSelect = function (event) {
                    this.selectedEvent = event;
                };
                EventsComponent = __decorate([
                    core_1.Component({
                        selector: 'events',
                        templateUrl: 'app/events/events.component.html',
                        directives: [event_detail_component_1.EventDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService, router_1.Router])
                ], EventsComponent);
                return EventsComponent;
            }());
            exports_1("EventsComponent", EventsComponent);
        }
    }
});
