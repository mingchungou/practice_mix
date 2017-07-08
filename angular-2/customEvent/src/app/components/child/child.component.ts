
import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-child",
    templateUrl: "./child.component.html"
})
export class ChildComponent {
    @Input("parentValue") 
    parentValue: string;

    @Output("childChange")
    childChange: EventEmitter<string> = new EventEmitter<string>();

    //Throw change event when input generates keyup event.
    private onChangeValue(value: string): void {
        this.childChange.emit(value);
    };
};
