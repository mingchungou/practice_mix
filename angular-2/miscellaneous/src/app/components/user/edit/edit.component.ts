
import {Component, ViewChild} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

//Loading components
import {CountdownComponent} from "../../countdown/countdown.component";

@Component({
    selector: "app-edit",
    templateUrl: "./edit.component.html"
})
export class EditComponent {
    /*@ViewChild(CountdownComponent)
    private countdownComponent: CountdownComponent;*/

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {

    };

    private navigate(): void {
        this.router.navigate(
            ["../detail", "Ming Chung"],
            {relativeTo: this.activatedRoute}
        );
    };
};
