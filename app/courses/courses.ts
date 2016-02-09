import { Injectable } from 'angular2/core';

export interface Course {
    id: number;
    name: string;
    about: string;
    location: string;
    //attending: string[];
}

export var COURSES:Course[] = [
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
    {"id": 3, "name": "Va-Du-Mar (Shoally Creek)", "about": "Great course.", "location": "Boiling Springs, SC"},
    {
        "id": 4,
        "name": "USC Upstate",
        "about": "Course located to the north side of the USC Upstate campus. 18 holes decorate the campus surroundings.",
        "location": "999999 Upstate Ave."
    }
];

@Injectable()
export class CourseService {
    getCourses() {
        return Promise.resolve(COURSES);
    }

    getCourse(id:number) {
        return COURSES[id - 1];


    }
}
