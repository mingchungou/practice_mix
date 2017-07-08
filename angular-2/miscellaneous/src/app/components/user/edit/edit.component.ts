
import {Component, OnInit, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

//Loading components
import {CountdownComponent} from "../../countdown/countdown.component";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html"
})
export class EditComponent implements OnInit {
    /*@ViewChild(CountdownComponent)
    private countdownComponent: CountdownComponent;*/

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {

    };

    ngOnInit() {

    };

    private navigate(): void {
        this.router.navigate(
            ["../detail", "Ming Chung"],
            {relativeTo: this.activatedRoute}
        );
    };
};
