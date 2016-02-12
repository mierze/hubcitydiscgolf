System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var COURSES, CourseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("COURSES", COURSES = [
                {
                    "id": 1,
                    "name": "Pipeline",
                    "about": "Course designed around a grand gas pipeline. Over the hill and through the woods you will need to go to play this beautiful course. Not for the faint of heart.",
                    "location": "300 Old Canaan Rd. Spartanburg, SC 29302"
                },
                {
                    "id": 2,
                    "name": "Tyger River",
                    "about": "Great course. Sports several open longer holes and a tight technical front 9 around beautiful Tyger River park.",
                    "location": ".. Gano Dr. Duncan, SC"
                },
                { "id": 3, "name": "Va-Du-Mar (Shoally Creek)", "about": "Great course.", "location": "Boiling Springs, SC" },
                {
                    "id": 4,
                    "name": "USC Upstate",
                    "about": "Course located to the north side of the USC Upstate campus. 18 holes decorate the campus surroundings.",
                    "location": "999999 Upstate Ave."
                }
            ]);
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return Promise.resolve(COURSES);
                };
                CourseService.prototype.getCourse = function (id) {
                    return COURSES[id - 1];
                };
                CourseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CourseService);
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
