System.register(['angular2/core', 'angular2/router', 'angular2/common'], function(exports_1) {
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
    var core_1, router_1, common_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent(_router) {
                    this._router = _router;
                    this.showMenu = 'none';
                    this.title = "Hub City Disc Golf";
                }
                NavComponent.prototype.toggleMenu = function () {
                    this.showMenu = this.showMenu == 'block' ? 'none' : 'block';
                };
                NavComponent.prototype.navigate = function (route) {
                    switch (route) {
                        case 'dash':
                            this._router.navigate(['Dashboard']);
                            break;
                        case 'cal':
                            this._router.navigate(['Calendar']);
                            break;
                        case 'about':
                            this._router.navigate(['About']);
                            break;
                        case 'courses':
                            this._router.navigate(['Courses']);
                            break;
                        case 'gal':
                            this._router.navigate(['Gallery']);
                            break;
                        default:
                            break;
                    }
                    this.toggleMenu();
                };
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'nav-bar',
                        templateUrl: 'app/partials/nav.component.html',
                        styleUrls: ['app/partials/nav.component.css'],
                        directives: [common_1.NgStyle]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
