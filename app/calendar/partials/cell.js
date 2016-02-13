System.register([], function(exports_1) {
    "use strict";
    var CalendarCell;
    return {
        setters:[],
        execute: function() {
            CalendarCell = (function () {
                function CalendarCell() {
                }
                CalendarCell.prototype.addEvent = function (event) {
                    this.events.push(event);
                };
                return CalendarCell;
            }());
            exports_1("CalendarCell", CalendarCell);
        }
    }
});
