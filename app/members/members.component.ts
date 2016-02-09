import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'members',
    templateUrl: 'app/members/members.component.html',
    styleUrls: ['app/members/members.component.css']
})
export class MembersComponent implements OnInit {
    public title: string;
    constructor() {

    }

    ngOnInit() {
        alert("Join Up!");
    }
}