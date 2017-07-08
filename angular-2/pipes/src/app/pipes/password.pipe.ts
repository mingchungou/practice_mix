
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "password"
})
export class PasswordPipe implements PipeTransform {
    transform(value: string, active: boolean = true): string {
        if (active) {
            let result: string = "";

            for (let i = 0; i < value.length; i++) {
                result += "*";
            }

            return result;
        } else {
            return value;
        }
    };
};
