
import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
    selector: "[appHighlight]"
})
export class HighlightDirective {
    //Handle values sent by directive
    @Input("appHighlight") specColor:string = "";

    constructor(private el:ElementRef) {
        this.el.nativeElement.style.display = "initial";
        this.hightLight("#000000");
        this.setFontSize("1rem");
        this.el.nativeElement.style.transition = "all 0.5s ease";
    };

    //Handle events
    @HostListener("mouseenter") mouseEntered() {
        this.hightLight(this.specColor || "#000000");
        this.setFontSize("2rem");
    };

    @HostListener("mouseleave") mouseLeaved() {
        this.hightLight("#000000");
        this.setFontSize("1rem");
    };

    private hightLight(color:string):void {
        this.el.nativeElement.style.color = color;
    };

    private setFontSize(size:string):void {
        this.el.nativeElement.style.fontSize = size;
    };
};
