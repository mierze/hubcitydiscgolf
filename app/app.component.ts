import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail.component';
import { DashboardComponent } from './dashboard.component';
import { MembersComponent } from './members/members.component';
import { CoursesComponent } from './courses/courses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventService } from './events/event.service';
import { NavComponent } from './partials/nav.component';
import { CourseService } from './courses/courses';
import { ImageService } from './gallery/image.service';
import { CourseDetailComponent } from './courses/course-detail.component';
import {DateService} from "./calendar/date.service";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavComponent],
    providers: [EventService, CourseService, ImageService, DateService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/events', name: 'Events', component: EventsComponent},
    {path: '/calendar', name: 'Calendar', component: CalendarComponent},
    {path: '/gallery', name: 'Gallery', component: GalleryComponent},
    {path: '/members', name: 'Members', component: MembersComponent},
    {path: '/courses', name: 'Courses', component: CoursesComponent},
    {path: '/detail/:id', name: 'EventDetail', component: EventDetailComponent},
    {path: '/course/detail/:id', name: 'CourseDetail', component: CourseDetailComponent}
])
export class AppComponent {

}