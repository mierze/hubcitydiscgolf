import { Component, OnInit } from 'angular2/core';
import { ImageService } from './image.service';

//import { PhotoSwipeUI_Default } from '../../node_modules/photoswipe/dist/photoswipe-ui-default.min';

@Component({
    selector: 'gallery',
    templateUrl: 'app/gallery/gallery.component.html',
    styleUrls: ['app/gallery/gallery.component.css']
})
export class GalleryComponent {
    public title:string;
    public images:string[] = [];
    constructor(private _imageService: ImageService) {

    }

    ngOnInit() {

        this.images = this._imageService.getImages();
        alert(this.images);
    }
}