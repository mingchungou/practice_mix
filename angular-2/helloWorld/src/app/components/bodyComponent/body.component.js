"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BodyComponent = (function () {
    function BodyComponent() {
        this.isVisible = true;
        this.phrase = "Ser fuerte no se trata solamente de tener poder, se trata de nuestro espritu.";
        this.author = "Roronoa Zoro";
        this.strawHatTeam = ["Luffgy", "Zoro", "Sanji", "Robin", "Nami"];
    }
    return BodyComponent;
}());
BodyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "body-component",
        templateUrl: "./body.component.html"
    })
], BodyComponent);
exports.BodyComponent = BodyComponent;
;
//# sourceMappingURL=body.component.js.map