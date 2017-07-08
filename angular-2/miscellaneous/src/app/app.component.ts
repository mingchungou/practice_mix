
import {Component} from "@angular/core";

/*
Component
- A component controls a zone of screen which be able to call it as view.
- A component is a standart class of JS ES6.
- The component defines the properties and methods which be available in its template.
*/
@Component({
    selector: "app-root",

    //The url of template which be binded to this component.
    templateUrl: "./app.component.html",

    //Allowing to define the view of component.
    //template: ``,

    //Allowing to define the styles of component.
    //styles: [``],

    //An array of file urls which apply to this component.
    //styleUrls: [],

    //This is optional, let Angular to find the templates and css based on relavtive urls.
    //moduleId: module.id
})
export class AppComponent {

};
