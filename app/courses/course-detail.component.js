System.register(['angular2/core', './courses', 'angular2/router'], function(exports_1) {
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
    var core_1, courses_1, router_1;
    var CourseDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_1_1) {
                courses_1 = courses_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CourseDetailComponent = (function () {
                function CourseDetailComponent(_courseService, _routeParams) {
                    this._courseService = _courseService;
                    this._routeParams = _routeParams;
                }
                CourseDetailComponent.prototype.ngOnInit = function () {
                    if (!this.course) {
                        var id = +this._routeParams.get('id');
                        this.course = this._courseService.getCourse(id);
                    }
                };
                CourseDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'course-detail',
                        templateUrl: 'app/courses/course-detail.component.html',
                        inputs: ['course']
                    }), 
                    __metadata('design:paramtypes', [courses_1.CourseService, router_1.RouteParams])
                ], CourseDetailComponent);
                return CourseDetailComponent;
            }());
            exports_1("CourseDetailComponent", CourseDetailComponent);
        }
    }
});