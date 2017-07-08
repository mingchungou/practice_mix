
import {Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy} from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit,
                                    OnChanges,
                                    DoCheck,
                                    AfterContentInit,
                                    AfterContentChecked,
                                    AfterViewInit,
                                    AfterViewChecked,
                                    OnDestroy {
    constructor() {
        console.log("Constructing");
    };

    ngOnInit() {
        console.log("Throw OnInit");
    };

    ngOnChanges() {
        console.log("Throw OnChanges");
    }

    ngDoCheck() {
        console.log("Throw DoCheck");
    };

    ngAfterContentInit() {
        console.log("Throw AfterContentInit");
    };

    ngAfterContentChecked() {
        console.log("Throw AfterContentChecked");
    };

    ngAfterViewInit() {
        console.log("Throw AfterViewInit");
    };

    ngAfterViewChecked() {
        console.log("Throw AfterViewChecked");
    };

    ngOnDestroy() {
        console.log("Throw OnDestroy");
    };
};
