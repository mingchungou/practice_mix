
import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";

//Loading pipes
import {CapitalizePipe} from "./pipes/capitalize.pipe";
import {SecureDomPipe} from "./pipes/securedom.pipe";
import {PasswordPipe} from "./pipes/password.pipe";

//Loading components
import {AppComponent} from "./app.component";

@NgModule({
    declarations: [
        CapitalizePipe,
        SecureDomPipe,
        PasswordPipe,
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [{
        provide: LOCALE_ID, useValue: "es"
    }],
    bootstrap: [AppComponent]
})
export class AppModule {};
