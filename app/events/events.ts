import { Event } from './event.service';
/*TODO
    -location -> id
    -repeating end/start dates
*/
export var EVENTS:Event[] = [
    {
        "id": 0,
        "name": "Pipeline Doubles",
        "date": null,
        "location": "Pipeline",
        "about": "10am every Saturday. Random draw doubles, alternating between these two spots. $6 to play, optional $1 ace pool, $1 birdie pool.",
        "repeat": "6b"
    },
    {
        "id": 1,
        "name": "Shoally Creek Doubles",
        "date": null,
        "location": "Shoally Creek",
        "about": "10am every Saturday. Random draw doubles, alternating between these two spots. $6 to play, optional $1 ace pool, $1 birdie pool.",
        "repeat": "6a"
    },
    {
        "id": 2, "name": "Pipeline Tags", "date": null, "location": "Pipeline",
        "about": "Every Sunday @ 2pm. Come throw for tags, or to just 'tag' along! Course rotates between Tyger River and Pipeline every other week. Free to play, optional $2 bogey pool.",
        "repeat": "0a"
    },
    {
        "id": 3, "name": "Tyger River Tags", "date": null, "location": "Tyger River",
        "about": "Every Sunday @ 2pm. Come throw for tags, or to just 'tag' along! Course rotates between Tyger River and Pipeline every other week. Free to play, optional $2 bogey pool.",
        "repeat": "0b"
    },
    // {
    //     "id": 4,
    //     "name": "Putting League",
    //     "date": null,
    //     "location": "Croft Baptist Church",
    //     "about": "Every Friday night, rain or shine 7pm. Random draw two on two. $6 to play!",
    //     "repeat": '5'
    // },
    {
        "id": 5,
        "name": "Tyger River Doubles",
        "date": null,
        "location": "Tyger River",
        "about": "Weekly random draw doubles 530PM.",
        "repeat": "4"
    },
    {
        "id": 6,
        "name": "Holston Creek Open",
        "date": new Date(2016, 5, 21),
        "location": "Holston Creek",
        "about": "Tentitive date. Get your schedule cleared up for this one!",
        "repeat": ""
    }
];
