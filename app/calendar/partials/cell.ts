export class CalendarCell {
    id: number;
    name: string;
    events: string[];

    public addEvent(event: string) {
        this.events.push(event);
    }
}
