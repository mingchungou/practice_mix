
import {Component, OnDestroy} from "@angular/core";

@Component({
    selector: "app-ng-class",
    templateUrl: "./ngClass.component.html"
})
export class NgClassComponent implements OnDestroy {
    private loadingTimeout: any;
    private alertType: string = "alert-danger";
    private textProperties: object = {
        colorType: 1
    };

    ngOnDestroy() {
        this.stopProcess();
    };

    private executeProcess(): void {
        this.loadingTimeout = setTimeout(() => {
            this.stopProcess();
        }, 3000);
    };

    private stopProcess(): void {
        clearTimeout(this.loadingTimeout);
        this.loadingTimeout = null;
    };
};
