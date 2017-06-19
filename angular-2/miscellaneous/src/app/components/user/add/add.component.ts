
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-add",
    templateUrl: "./add.component.html"
})
export class AddComponent implements OnInit {
    constructor(private activatedRoute:ActivatedRoute) {

    };

    ngOnInit() {
        //Accessing parent params
        this.activatedRoute.parent.params.subscribe((parameters:object) => {
            console.log(parameters);
        });
    };
};
