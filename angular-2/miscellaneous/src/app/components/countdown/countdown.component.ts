
import {Component, OnInit, OnDestroy} from "@angular/core";

@Component({
    selector: "app-countdown",
    templateUrl: "./countdown.component.html"
})
export class CountdownComponent implements OnInit, OnDestroy {
    private countInterval: any;
    private message: string = "";
    public time: number = 10;

    ngOnInit() {
        this.countDown();
    };

    ngOnDestroy() {
        this.stop();
    };

    public countDown(): void {
        if (this.countInterval) {
            return;
        }

        this.countInterval = setInterval(() => {
            this.time--;

            if (this.time === 0) {
                this.message = "Blast off!";
            } else {
                if (this.time < 0) {
                    this.time = 10;
                }

                this.message = `${this.time} second${(this.time > 1) ? "s" : ""} and counting`;
            }
        }, 1000);
    };

    private clearInterval(): void {
        clearInterval(this.countInterval);
        this.countInterval = null;
    };

    public stop(): void {
        this.clearInterval();
        this.message = `Holding at ${this.time} second${(this.time > 1) ? "s" : ""}`;
    };
};
