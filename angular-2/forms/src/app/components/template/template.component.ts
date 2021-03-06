
import {Component} from "@angular/core";
import {NgForm, FormGroup} from "@angular/forms";

@Component({
    selector: "app-template",
    templateUrl: "./template.component.html"
})
export class TemplateComponent {
    private user: object = {
        name: "",
        email: "",
        birth: "",
        country: "",
        gender: "male",
        accept: false
    };

    private countries: object = [{
        cod: "CRI",
        country: "Costa Rica"
    }, {
        cod: "USA",
        country: "United State"
    }, {
        cod: "TWN",
        country: "Taiwán"
    }, {
        cod: "ESP",
        country: "España"
    }];

    private gender: object = [{
        cod: "male",
        value: "Male"
    }, {
        cod: "female",
        value: "Female"
    }, {
        cod: "other",
        value: "Other"
    }];

    private save(form: NgForm): void {
        console.log(form);

        //To get the current input values, get them by form.value
        console.log(form.value);
    };
};
