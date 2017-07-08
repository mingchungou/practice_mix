
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html"
})
export class DetailComponent implements OnInit, OnDestroy {
    private paramSubs: Subscription;
    private userName: string = "Monkey D. Luffy";

    constructor(private activatedRoute: ActivatedRoute) {

    };

    ngOnInit() {
        this.paramSubs = this.activatedRoute.params.subscribe(params => {
            if (params && params.name) {
                this.userName = params.name;
            }
        }, err => console.error(err));
    };

    ngOnDestroy() {
        this.paramSubs.unsubscribe();
    };
};
