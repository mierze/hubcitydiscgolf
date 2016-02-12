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
    var IMAGES, ImageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IMAGES = [
                'app/gallery/images/16-2-6_pipeline-doubles_h1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h2-2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h2-3.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h2-5.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h2-6.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h3-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h4-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h4-2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h6-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h6-2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h7-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h7-2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8-2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8-3.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8-4.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8-5.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8-6.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h8-7.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h11-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h11-2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h12-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h12-2.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h12-3.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h12-4.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h12-5.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h12-6.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h12-7.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_h18-1.jpg',
                'app/gallery/images/16-2-6_pipeline-doubles_practice.jpg'
            ];
            ImageService = (function () {
                function ImageService() {
                }
                ImageService.prototype.getImages = function () {
                    return IMAGES;
                };
                ImageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ImageService);
                return ImageService;
            }());
            exports_1("ImageService", ImageService);
        }
    }
});
