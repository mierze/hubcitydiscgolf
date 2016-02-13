import { Injectable } from 'angular2/core';
import { EVENTS } from './events';

export interface Event {
    id: number;
    name: string;
    date: Date;
    location: string;
    about: string;
    repeat: string;
}

@Injectable()
export class EventService {
    getEvents() {
        return EVENTS;
    }

    getEvent(id:number) {
        return Promise.resolve(EVENTS).then(
            events => events.filter(h => h.id === id)[0]
        );
    }
}
