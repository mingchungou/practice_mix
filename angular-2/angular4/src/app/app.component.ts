
import {Component, Renderer2} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    private user: object;
    private colorArray: Array<string> = ["#f781be", "#01a9db", "#585858", "#b45f04", "#0b6121"];

    constructor(private renderer: Renderer2) {

    };

    private changeColor(element: HTMLElement) {
        let number: number = Math.floor((Math.random() * 5));

        this.renderer.setStyle(element, "color", this.colorArray[number]);
    };
};
