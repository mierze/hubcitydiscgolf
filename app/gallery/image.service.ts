import { Injectable } from 'angular2/core';

//for later
export interface Image {
    src: string;
    caption: string;
    photographer: string;
    location: string;
    //attending: string[];
}

var IMAGES:string[] = [
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

@Injectable()
export class ImageService {
    getImages() {
        return IMAGES;
    }
}
