
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
//Have to import ReactiveFormsModule if want to work form by data
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

//Loading components
import {AppComponent} from "./app.component";
import {TemplateComponent} from "./components/template/template.component";
import {DataComponent} from "./components/data/data.component";

@NgModule({
    declarations: [
        AppComponent,
        TemplateComponent,
        DataComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {};
