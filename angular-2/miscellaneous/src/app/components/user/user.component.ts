
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html"
})
export class UserComponent implements OnInit {
    constructor(private activatedRoute:ActivatedRoute) {

    };

    ngOnInit() {
        this.activatedRoute.params.subscribe((parameters:object) => {
            console.log(parameters);
        }, err => console.log(err));
    };
};



/*
Note:
- subscribe is used to handle observer response.
*/
