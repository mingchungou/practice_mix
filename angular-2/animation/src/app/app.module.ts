
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

//Loading components
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule //This is new feature for Angular 4.
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {};
