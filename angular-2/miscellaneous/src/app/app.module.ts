
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

//Loading routes
import {APP_ROUTING} from "./app.routes";

//Loading directives
import {HighlightDirective} from "./directives/highlight.directive";

//Loading components
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {NgStyleComponent} from "./components/ngStyle/ngStyle.component";
import {CssComponent} from "./components/css/css.component";
import {NgClassComponent} from "./components/ngClass/ngClass.component";
import {NgSwitchComponent} from "./components/ngSwitch/ngSwitch.component";
import {UserComponent} from "./components/user/user.component";
import {AddComponent} from "./components/user/add/add.component";
import {EditComponent} from "./components/user/edit/edit.component";
import {DetailComponent} from "./components/user/detail/detail.component";
import {NavbarComponent} from "./components/shared/navbar/navbar.component";
import {CountdownComponent} from "./components/countdown/countdown.component";

/*
Module
- Using "export" and "import" of JS ES6.
- A module is a set of code for a specific scope from the app.
- All Angular apps have at least a module, the root module.
- Module usage: internal and external
- In an internal module uses the keyword "module" by grouping a set of stuff like
classes, objects, etc.
- In an external module don't use the keyword "module", just use export.
*/
@NgModule({
    /*
    The views belong to the module should inject into declarations, there are three type of
    views: components, directives and pipes.
    */
    declarations: [
        HighlightDirective,

        AppComponent,
        HomeComponent,
        NgStyleComponent,
        CssComponent,
        NgClassComponent,
        NgSwitchComponent,
        UserComponent,
        AddComponent,
        EditComponent,
        DetailComponent,
        NavbarComponent,
        CountdownComponent
    ],

    /*
    Other modules which have exported classes and be required by templates of components
    from this module.
    */
    imports: [
        BrowserModule,
        APP_ROUTING
    ],

    /*
    A set of declarations that should be accessable for templates of components from other
    modules.
    */
    exports: [],

    //The services needed by this module and be available for whole app.
    providers: [],

    //Define the root view, it is used by root module.
    bootstrap: [AppComponent]

})
export class AppModule {};



/*
Note
- There are 4 ways to data binding: interpolation(To DOM), property binding(To DOM), event
binding(From DOM), two way binding(to/from DOM).
- Interpolation is responsable to insert property value of component to DOM. Ex:
<p>{{name}}</p>.
- Property binding is responsable to send from a father component property to child
component property.
- Event binding is responsable to call a component function when a event DOM is up.
- Two way binding is a combination of property and event binding, is responsable to set
component property value to DOM and update component property when this is changed from
DOM.
*/
