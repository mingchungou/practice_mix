
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-css",
    template: `
    <section class="py-3">
    <h2>- Css of Component</h2>
    <p>Hala Madrid!</p>
    </section>`,
    styles: [`
        p {
            color: #ff0000;
            font-size: 1rem;
        }
    `]
})
export class CssComponent implements OnInit {
    ngOnInit() {

    };
};
