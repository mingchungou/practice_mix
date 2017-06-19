
import {Component, OnInit, OnChanges} from "@angular/core";

@Component({
    selector: "app-ng-style",
    templateUrl: "./ngStyle.component.html"
})
export class NgStyleComponent implements OnInit, OnChanges {
    private fontSize:number = 14;

    ngOnInit() {

    };

    ngOnChanges() {
        console.log("Throw OnChanges");
    };
};
