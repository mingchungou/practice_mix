
import {Routes} from "@angular/router";

//Loading components
import {AddComponent} from "./add/add.component";
import {EditComponent} from "./edit/edit.component";
import {DetailComponent} from "./detail/detail.component";

export const USER_ROUTES: Routes = [{
    path: "add",
    component: AddComponent
}, {
    path: "edit",
    component: EditComponent
}, {
    path: "detail",
    component: DetailComponent
}, {
    path: "detail/:name",
    component: DetailComponent
}, {
    path: "**",
    pathMatch: "full",
    redirectTo: "add"
}];
