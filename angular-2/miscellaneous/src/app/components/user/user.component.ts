
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html"
})
export class UserComponent implements OnInit, OnDestroy {
    private paramSubs: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {

    };

    ngOnInit() {
        this.paramSubs = this.activatedRoute.params.subscribe((parameters) => {
            console.log(parameters);
        }, err => console.log(err));
    };

    ngOnDestroy() {
        this.paramSubs.unsubscribe();
    };
};



/*
Note:
- subscribe is used to handle observer response.
*/
