System.register(['angular2/core', './image.service'], function(exports_1) {
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
    var core_1, image_service_1;
    var GalleryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (image_service_1_1) {
                image_service_1 = image_service_1_1;
            }],
        execute: function() {
            GalleryComponent = (function () {
                function GalleryComponent(_imageService) {
                    this._imageService = _imageService;
                    this.images = [];
                }
                GalleryComponent.prototype.ngOnInit = function () {
                    this.images = this._imageService.getImages();
                };
                GalleryComponent.prototype.toggleModal = function (image) {
                    this.image = image;
                    this.showModal = this.showModal ? false : true;
                };
                GalleryComponent = __decorate([
                    core_1.Component({
                        selector: 'gallery',
                        templateUrl: 'app/gallery/gallery.component.html',
                        styleUrls: ['app/gallery/gallery.component.css']
                    }), 
                    __metadata('design:paramtypes', [image_service_1.ImageService])
                ], GalleryComponent);
                return GalleryComponent;
            }());
            exports_1("GalleryComponent", GalleryComponent);
        }
    }
});