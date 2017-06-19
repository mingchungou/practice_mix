
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-ng-switch",
    templateUrl: "./ngSwitch.component.html"
})
export class NgSwitchComponent implements OnInit {
    private alert:string = "success";

    ngOnInit() {

    };

    private getAlertRandom():void {
        let number:number = Math.floor((Math.random() * 4) + 1);

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
