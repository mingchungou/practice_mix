
import {Component} from "@angular/core";

@Component({
    selector: "app-ng-switch",
    templateUrl: "./ngSwitch.component.html"
})
export class NgSwitchComponent {
    private alert: string = "success";

    private getAlertRandom(): void {
        let number: number = Math.floor((Math.random() * 4) + 1);

        switch(number) {
            case 1:
                this.alert = "success";
                break;
            case 2:
                this.alert = "info";
                break;
            case 3:
                this.alert = "warning";
                break;
            default:
                this.alert = "";
                break;
        }
    };
};
