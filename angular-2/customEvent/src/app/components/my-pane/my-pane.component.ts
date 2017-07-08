
import {Component, Input, Inject, forwardRef} from "@angular/core";

//Loading components
import {MyTabComponent} from "../my-tab/my-tab.component";

@Component({
    selector: "app-my-pane",
    templateUrl: "./my-pane.component.html"
})
export class MyPaneComponent {
    @Input("title")
    title: string;
    
    public selected: boolean = false;

    constructor(@Inject(forwardRef(() => MyTabComponent)) myTabComponent: MyTabComponent) {
        myTabComponent.addPane(this);
    };
};
