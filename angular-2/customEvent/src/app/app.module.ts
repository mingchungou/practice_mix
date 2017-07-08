
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

//Loading components
import {AppComponent} from "./app.component";
import {ChildComponent} from "./components/child/child.component";
import {HeroListComponent} from "./components/hero-list/hero-list.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {HeroEditableComponent} from "./components/hero-editable/hero-editable.component";
import {MyTabComponent} from "./components/my-tab/my-tab.component";
import {MyPaneComponent} from "./components/my-pane/my-pane.component";
import {MultipleSlotComponent} from "./components/multiple-slot/multiple-slot.component";

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        HeroListComponent,
        HeroDetailComponent,
        HeroEditableComponent,
        MyTabComponent,
        MyPaneComponent,
        MultipleSlotComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {};
