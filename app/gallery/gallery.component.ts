import { Component, OnInit } from 'angular2/core';
import { ImageService } from './image.service';

@Component({
    selector: 'gallery',
    templateUrl: 'app/gallery/gallery.component.html',
    styleUrls: ['app/gallery/gallery.component.css']
})
export class GalleryComponent {
    title:string;
    images:string[] = [];
    constructor(private _imageService: ImageService) {

    }

    ngOnInit() {
        this.images = this._imageService.getImages();
    }
}