
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
    selector: "app-add",
    templateUrl: "./add.component.html"
})
export class AddComponent implements OnInit, OnDestroy {
    private timerInterval: any;
    private paramSubs: Subscription;
    private userID: string = "";
    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(private activatedRoute: ActivatedRoute) {

    };

    ngOnInit() {
        //Accessing parent params
        this.paramSubs = this.activatedRoute.parent.params.subscribe((parameters) => {
            this.userID = parameters.id;
        });

        let date: Date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();

        this.timerInterval = setInterval(this.timer.bind(this), 1000);
    };

    ngOnDestroy() {
        clearInterval(this.timerInterval);
        this.paramSubs.unsubscribe();
    };

    private timer(): void {
        if (++this.seconds > 59) {
            if (++this.minutes > 59) {
                if (++this.hours > 24) {
                    this.hours = 0;
                }

                this.minutes = 0;
            }

            this.seconds = 0;
        }
    };
};
