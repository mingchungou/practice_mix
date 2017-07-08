
import {Directive, ElementRef, HostListener, Input} from "@angular/core";

/*
Directive
- A directive is a manner to add dynamic behavior to HTML by tags or selectors.
- There are two types of directives: structural directive and attribute directive.
- Structural directive is used to change/alter DOM.
- Attribute directive is used to alter the behavior or appearence of a element within DOM.
*/
@Directive({
    selector: "[appHighlight]"
})
export class HighlightDirective {
    //Handle values sent by directive
    @Input("appHighlight")
    specColor: string = "";

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.display = "initial";
        this.hightLight("#000000");
        this.setFontSize("1rem");
        this.el.nativeElement.style.transition = "all 0.5s ease";
    };

    //Handle mouseenter event.
    @HostListener("mouseenter")
    private mouseEntered() {
        this.hightLight(this.specColor || "#000000");
        this.setFontSize("2rem");
    };

    //Handle mouseleave event.
    @HostListener("mouseleave")
    private mouseLeaved() {
        this.hightLight("#000000");
        this.setFontSize("1rem");
    };

    private hightLight(color: string): void {
        this.el.nativeElement.style.color = color;
    };

    private setFontSize(size: string): void {
        this.el.nativeElement.style.fontSize = size;
    };
};
