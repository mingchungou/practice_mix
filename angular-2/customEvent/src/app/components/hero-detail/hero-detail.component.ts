
import {Component, Input, Output, EventEmitter} from "@angular/core";

//Loading interfaces
import {Hero} from "../../interfaces/hero";

@Component({
    selector: "app-hero-detail",
    templateUrl: "./hero-detail.component.html"
})
export class HeroDetailComponent {
    @Input("hero")
    hero: Hero;

    @Output("remove") 
    remove: EventEmitter<Hero> = new EventEmitter<Hero>();

    //Function for updating hero location.
    private updateHero(newValue: string): void {
        this.hero.location = newValue;
    };

    //Function for emitting remove hero event.
    private removeHero(): void {
        this.remove.emit(this.hero);
    };
};
