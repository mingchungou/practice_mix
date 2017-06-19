
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
    transform(value:string, all:boolean = true):string {
        value = value.toLowerCase();
        let valueSplit:string[] = value.split(" ");

        if (all) {
            for (let i in valueSplit) {
                valueSplit[i] = valueSplit[i][0].toUpperCase() + valueSplit[i].substr(1);
            }
        } else {
            valueSplit[0] = valueSplit[0][0].toUpperCase() + valueSplit[0].substr(1);
        }

        return valueSplit.join(" ");
    };
};
