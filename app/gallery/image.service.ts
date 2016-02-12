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
    'http://placehold.it/300x300',
    'http://placehold.it/300x300',
    'http://placehold.it/300x300',
    'http://placehold.it/300x300',
    'http://placehold.it/300x300',
    'http://placehold.it/300x300'
];

@Injectable()
export class ImageService {
    getImages() {
        return IMAGES;
    }
}
