import { Component, OnInit } from 'angular2/core';
import { CoursesComponent } from '../courses/courses.component';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html',
    directives: [CoursesComponent],
    styleUrls: ['app/about/about.component.css']
})
export class AboutComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }
}
