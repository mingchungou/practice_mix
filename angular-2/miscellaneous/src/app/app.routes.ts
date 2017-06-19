
import {RouterModule, Routes} from "@angular/router";

//Loading child routes
import {USER_ROUTES} from "./components/user/user.routes";

//Loading components
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";

const APP_ROUTES: Routes = [{
    path: "home",
    component: HomeComponent
}, { //Handle children paths
    path: "user/:id",
    component: UserComponent,
    children: USER_ROUTES
}, {
    path: "**",
    pathMatch: "full",
    redirectTo: "home"
}];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
