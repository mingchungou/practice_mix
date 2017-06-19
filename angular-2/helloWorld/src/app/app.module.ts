
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

//Loading components
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/headerComponent/header.component";
import {BodyComponent} from "./components/bodyComponent/body.component";
import {FooterComponent} from "./components/footerComponent/footer.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {};
