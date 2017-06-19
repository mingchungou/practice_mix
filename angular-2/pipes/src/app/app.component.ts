
import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    private luffy:string = "Monkey D. Luffy";
    private myName:string = "mInG cHUNG ou ChEn";

    private myArray:string[] = ["Zoro", "Sanji", "Nami", "Ussop"];

    private PI:number = Math.PI;

    private myPercent:number = 0.234;

    private mySalary:number = 1700.5;

    private zoro:{name:string, nick:string, age:number, swords:{name:string}[]} = {
        name: "Roronoa Zoro",
        nick: "Marimo",
        age: 21,
        swords: [{
            name: "Wado Ichimonji"
        }, {
            name: "Shusui"
        }, {
            name: "Sandai Kitetsu"
        }]
    };

    private myPromise:Promise<any> = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data arrived"), 3500);
    });

    private myBirth:Date = new Date();

    private myVideo:string = "Cjvg-MFxWWY";

    private myPassword:string = "mingchungou";
    private isActive:boolean = true;
};
