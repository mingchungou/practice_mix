
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-ng-class",
    templateUrl: "./ngClass.component.html"
})
export class NgClassComponent implements OnInit {
    private alertType:string = "alert-danger";
    private textProperties:object = {
        colorType: 1
    };
    private loading:boolean = false;

    ngOnInit() {

    };

    private executeProcess():void {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    };
};
