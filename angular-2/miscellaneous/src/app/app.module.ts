
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

@NgModule({
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
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {};
