System.register(['angular2/core', 'angular2/router', './events/events.component', './events/event-detail.component', './dashboard.component', './members/members.component', './courses/courses.component', './gallery/gallery.component', './calendar/calendar.component', './events/event.service', './partials/nav.component', './courses/courses', './gallery/image.service', './courses/course-detail.component', './albert/albert.component'], function(exports_1) {
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
    var core_1, router_1, events_component_1, event_detail_component_1, dashboard_component_1, members_component_1, courses_component_1, gallery_component_1, calendar_component_1, event_service_1, nav_component_1, courses_1, image_service_1, course_detail_component_1, albert_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (events_component_1_1) {
                events_component_1 = events_component_1_1;
            },
            function (event_detail_component_1_1) {
                event_detail_component_1 = event_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (members_component_1_1) {
                members_component_1 = members_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            },
            function (calendar_component_1_1) {
                calendar_component_1 = calendar_component_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (courses_1_1) {
                courses_1 = courses_1_1;
            },
            function (image_service_1_1) {
                image_service_1 = image_service_1_1;
            },
            function (course_detail_component_1_1) {
                course_detail_component_1 = course_detail_component_1_1;
            },
            function (albert_component_1_1) {
                albert_component_1 = albert_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, nav_component_1.NavComponent],
                        providers: [event_service_1.EventService, courses_1.CourseService, image_service_1.ImageService, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/events', name: 'Events', component: events_component_1.EventsComponent },
                        { path: '/calendar', name: 'Calendar', component: calendar_component_1.CalendarComponent },
                        { path: '/gallery', name: 'Gallery', component: gallery_component_1.GalleryComponent },
                        { path: '/members', name: 'Members', component: members_component_1.MembersComponent },
                        { path: '/courses', name: 'Courses', component: courses_component_1.CoursesComponent },
                        { path: '/detail/:id', name: 'EventDetail', component: event_detail_component_1.EventDetailComponent },
                        { path: '/course/detail/:id', name: 'CourseDetail', component: course_detail_component_1.CourseDetailComponent },
                        { path: '/albert', name: 'Albert', component: albert_component_1.AlbertComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
