
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "body-component",
    templateUrl: "./body.component.html"
})
export class BodyComponent {
    isVisible:boolean = true;
    phrase:string = "Ser fuerte no se trata solamente de tener poder, se trata de nuestro espritu.";
    author:string = "Roronoa Zoro";

    strawHatTeam:string[] = ["Luffgy", "Zoro", "Sanji", "Robin", "Nami"];
};
