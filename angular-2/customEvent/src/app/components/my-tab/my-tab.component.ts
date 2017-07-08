
import {Component} from "@angular/core";

@Component({
  selector: "app-my-tab",
  templateUrl: "./my-tab.component.html"
})
export class MyTabComponent {
    private panes: Array<any> = [];

    //Function for setting pane chosen selected value to true.
    private select(pane): void {
        this.panes.forEach(item => {
            item.selected = false;
        });

        pane.selected = true;
    };

    //Function for adding child pane to pane list.
    public addPane(pane: object): void {
        if (this.panes.length === 0) {
            this.select(pane);
        }

        this.panes.push(pane);
    };
};
