System.register(['angular2/core', 'angular2/router', './courses'], function(exports_1) {
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
    var core_1, router_1, courses_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_1_1) {
                courses_1 = courses_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(_courseService, _router) {
                    this._courseService = _courseService;
                    this._router = _router;
                }
                CoursesComponent.prototype.getCourses = function () {
                    this.courses = [];
                    this.courses = this._courseService.getCourses();
                    return this.courses;
                };
                CoursesComponent.prototype.gotoDetail = function (id) {
                    alert('go to ' + id);
                    this._router.navigate(['CourseDetail', { id: id }]);
                };
                CoursesComponent.prototype.ngOnInit = function () {
                    this.courses = this.getCourses();
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        templateUrl: 'app/courses/courses.component.html',
                        styleUrls: ['app/courses/courses.component.css']
                    }), 
                    __metadata('design:paramtypes', [courses_1.CourseService, router_1.Router])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
