
import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "app-hero-editable",
    templateUrl: "./hero-editable.component.html"
})
export class HeroEditableComponent implements OnInit {
    @Input("location")
    location: string;

    @Output("update")
    update: EventEmitter<string> = new EventEmitter<string>();

    private editMode: boolean = false;
    private fieldValueCopy: string;

    ngOnInit() {
        this.fieldValueCopy = this.location;
    };

    /*
    Function for handling edit or static mode and emit update event when location is
    changed.
    */
    private handleModeChange(): void {
        if (this.editMode) {
            this.update.emit(this.location);
            this.fieldValueCopy = this.location;
        }

        this.editMode = !this.editMode;
    };

    //Function for reseting the current location value.
    private reset(): void {
        this.location = this.fieldValueCopy;
        this.editMode = false;
    };
};
