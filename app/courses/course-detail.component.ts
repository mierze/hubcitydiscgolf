import { Component, OnInit } from 'angular2/core';
import { Course, CourseService } from './courses';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'course-detail',
    templateUrl: 'app/courses/course-detail.component.html',
    inputs: ['course']
})
export class CourseDetailComponent implements OnInit {
    public course:Course;

    constructor(private _courseService:CourseService, private _routeParams:RouteParams) {
    }

    ngOnInit() {

        if (!this.course) {
            let id = +this._routeParams.get('id');
            this.course = this._courseService.getCourse(id);
        }
    }
}
