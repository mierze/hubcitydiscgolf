import { Injectable } from 'angular2/core';
import { EVENTS } from './events';

export interface Event {
    id: number;
    name: string;
    date: Date;
    location: string;
    about: string;
    //attending: string[];
}
export interface Date {
    month: number;
    day: number;
    time: number; //0-24
    year: number;
}

@Injectable()
export class EventService {
    getEvents() {
        return Promise.resolve(EVENTS);
    }

    getEvent(id:number) {
        return Promise.resolve(EVENTS).then(
            events => events.filter(h => h.id === id)[0]
        );
    }
}
