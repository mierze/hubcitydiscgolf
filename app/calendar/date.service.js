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
    var DateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DateService = (function () {
                function DateService() {
                }
                //TODO:
                //refactor into services below
                DateService.prototype.getNumDays = function (m) {
                    if (m < 0) {
                        m = 11;
                    }
                    else if (m > 11) {
                        m = 0;
                    }
                    switch (m) {
                        case 0:
                        case 2:
                        case 4:
                        case 6:
                        case 7:
                        case 9:
                        case 11:
                            return 31;
                        case 1:
                            return new Date().getFullYear() % 4 ? 29 : 28;
                        default:
                            return 30;
                    }
                };
                DateService.prototype.getDay = function (d) {
                    switch (d) {
                        case 0:
                            return 'Sunday';
                        case 1:
                            return 'Monday';
                        case 2:
                            return 'Tuesday';
                        case 3:
                            return 'Wednesday';
                        case 4:
                            return 'Thursday';
                        case 5:
                            return 'Friday';
                        case 6:
                            return 'Saturday';
                    }
                };
                DateService.prototype.getMonth = function (m, y, cy) {
                    var year = (y == cy) ? '' : ' ' + y;
                    switch (m) {
                        case 0:
                            return 'January' + year;
                        case 1:
                            return 'February' + year;
                        case 2:
                            return 'March' + year;
                        case 3:
                            return 'April' + year;
                        case 4:
                            return 'May' + year;
                        case 5:
                            return 'June' + year;
                        case 6:
                            return 'July' + year;
                        case 7:
                            return 'August' + year;
                        case 8:
                            return 'September' + year;
                        case 9:
                            return 'October' + year;
                        case 10:
                            return 'November' + year;
                        case 11:
                            return 'December' + year;
                        default:
                            return '...';
                    }
                };
                DateService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DateService);
                return DateService;
            }());
            exports_1("DateService", DateService);
        }
    }
});
