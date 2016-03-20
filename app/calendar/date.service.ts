import { Injectable } from 'angular2/core';


@Injectable()
export class DateService {
//TODO:
    //refactor into services below
    getNumDays(m:number) {
        if (m < 0) {
            m = 11;
        } else if (m > 11) {
            m = 0;
        }
        switch (m) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31;
            case 1:
                return new Date().getFullYear() % 4 ? 29 : 28;
            default:
                return 30;
        }
    }

    getDay(d:number) {
        switch (d) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    }

    getMonth(m:number, y: number, cy:number) {
        let year = (y == cy) ? '' : ' ' + y;
        switch (m) {
            case 0:
                return 'January' + year;
            case 1:
                return 'February' + year;
            case 2:
                return 'March' + year;
            case 3:
                return 'April' + year;
            case 4:
                return 'May' + year;
            case 5:
                return 'June' + year;
            case 6:
                return 'July' + year;
            case 7:
                return 'August' + year;
            case 8:
                return 'September' + year;
            case 9:
                return 'October' + year;
            case 10:
                return 'November' + year;
            case 11:
                return 'December' + year;
            default:
                return '...';
        }
    }
}
