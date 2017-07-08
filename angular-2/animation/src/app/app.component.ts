
import {Component,
    trigger,
    state,
    style,
    transition,
    animate,
    group,
    keyframes
} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    animations: [
        trigger("focusPanel", [
            state("inactive", style({
                transform: "scale(1)",
                backgroundColor: "#610b0b"
            })),
            state("active", style({
                transform: "scale(1.1)",
                backgroundColor: "#df0101"
            })),

            //animate(duration, delay, easing)
            transition("inactive <=> active", animate("0.5s ease"))
            /*transition("inactive => active", animate("0.5s 2s ease")),
            transition("active => inactive", animate("0.5s 2s ease"))*/
        ]),
        trigger("slidePane", [
            state("hide", style({
                height: 0
            })),
            state("show", style({
                height: "*"
            })),
            transition("hide <=> show", animate("0.5s ease"))
        ]),
        trigger("groupTrigger", [
            transition("end => start", group([
                animate("4s ease", style({
                    transform: "rotate(360deg)",
                })),
                animate("3s ease", style({
                    width: "30px"
                }))
            ])),
            transition("start => end", group([
                animate("4s ease", style({
                    transform: "rotate(-360deg)",
                })),
                animate("3s ease", style({
                    width: "30px"
                }))
            ]))
        ]),
        trigger("movePanel", [
            transition("void => *", [
                /*style({
                    transform: "translateY(-100%)"
                }),
                animate("0.5s ease")*/

                animate("0.6s ease", keyframes([
                    style({
                        opacity: 0,
                        transform: "translateY(-200px)",
                        offset: 0
                    }),
                    style({
                        opacity: 1,
                        transform: "translateY(25px)",
                        offset: 0.8
                    }),
                    style({
                        opacity: 1,
                        transform: "translateY(0)",
                        offset: 1
                    }),
                ]))
            ])
        ]),
        trigger("flyInOut", [
            transition(":enter", [
                /*style({
                    transform: "translateX(-100%)"
                }),
                animate("0.5s ease")*/
                animate("1s ease", keyframes([
                    style({
                        opacity: 0,
                        transform: "translateX(-100%)",
                        offset: 0
                    }),
                    style({
                        opacity: 0.6,
                        transform: "translateX(30px)",
                        offset: 0.6
                    }),
                    style({
                        opacity: 1,
                        transform: "translateX(0)",
                        offset: 1
                    })
                ]))
            ]),
            transition(":leave", [
                /*animate("0.5s ease", style({
                    transform: "translateX(100%)"
                }))*/
                animate("1s ease", keyframes([
                    style({
                        opacity: 1,
                        transform: "translateX(0)",
                        offset: 0
                    }),
                    style({
                        opacity: 0.4,
                        transform: "translateX(-30px)",
                        offset: 0.4
                    }),
                    style({
                        opacity: 0,
                        transform: "translateX(100%)",
                        offset: 1
                    })
                ]))
            ])
        ])
    ]
})
export class AppComponent {
    private state: string = "inactive";
    private slide: string = "show";
    private groupTrigger: string = "end";
    private flyInOut: boolean = true;

    private toggleMove(): void {
        this.state = (this.state === "inactive") ? "active" : "inactive";
    };

    private toggleSlide(): void {
        this.slide = (this.slide === "hide") ? "show" : "hide";
    };

    private toggleGroupTrigger(): void {
        this.groupTrigger = (this.groupTrigger === "end") ? "start" : "end";
    };

    private toggleFlyInOut(): void {
        this.flyInOut = this.flyInOut ? false : true;
    };

    private animationStart(ev: object): void {
        console.log(ev);
    };

    private animationDone(ev: object): void {
        console.log(ev);
    };
};
