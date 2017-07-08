
import {Component, OnInit} from "@angular/core";

//Loading interfaces
import {Hero} from "../../interfaces/hero";

@Component({
    selector: "app-hero-list",
    templateUrl: "./hero-list.component.html",
})
export class HeroListComponent implements OnInit {
    private heroList: Hero[];

    ngOnInit() {
        this.heroList = [{
            name: "Superman",
            location: "Kansas"
        }, {
            name: "Batman",
            location: "Wayne Manor"
        }, {
            name: "Spiderman",
            location: "Forest Hills"
        }, {
            name: "Hulk",
            location: "New York"
        }];
    };

    //Function for removing the hero selected from hero list.
    private removeHero(hero: Hero): void {
        this.heroList = this.heroList.filter(function(item) {
            return item.name !== hero.name && item.location !== hero.location;
        });
    };
};
