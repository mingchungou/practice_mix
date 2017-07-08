
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "body-component",
    templateUrl: "./body.component.html"
})
export class BodyComponent {
    private isVisible: boolean = true;
    private phrase: string = "Ser fuerte no se trata solamente de tener poder, se trata de nuestro espritu.";
    private author: string = "Roronoa Zoro";
    private strawHatTeam: string[] = ["Luffgy", "Zoro", "Sanji", "Robin", "Nami"];
};
