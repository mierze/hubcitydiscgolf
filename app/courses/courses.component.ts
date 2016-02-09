import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Course, CourseService } from './courses';

@Component({
    selector: 'courses',
    templateUrl: 'app/courses/courses.component.html'
})
export class CoursesComponent implements OnInit {
    public courses: Course[];

    constructor(private _courseService: CourseService, private _router: Router) { }

    getCourses() {
        this.courses = [];

        this._courseService.getCourses().then(courses => this.courses = courses);

            return this.courses;
    }

    gotoDetail(id: number) {
        alert('go to ' + id);
        this._router.navigate(['CourseDetail', { id: id }]);
    }

    ngOnInit() {
        this.courses = this.getCourses();
    }

}