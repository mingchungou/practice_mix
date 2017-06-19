
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormArray, Validators} from "@angular/forms";
import {Observable} from "rxjs/Rx";

@Component({
    selector: "app-data",
    templateUrl: "./data.component.html"
})
export class DataComponent implements OnInit {
    private form:FormGroup;
    private user:object = {
        fullName: {
            name: "Monkey D. Luffy"
        },
        username: "",
        email: "gearfour@gmail.com",
        hobby: [],
        password: "",
        confirm: ""
    };

    ngOnInit() {
        let nameRegExp:RegExp = /^[^()\/\\\[\]@#$%&?¡!¿{}<>]+$/;
        let emailRegExp:RegExp = /^[^()\/\\\[\]@#$%&?¡!¿{}<>]+@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,3}){1,2}$/;

        this.form = new FormGroup({
            fullName: new FormGroup({
                name: new FormControl("", [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(20),
                    Validators.pattern(nameRegExp),
                    this.nameBanned
                ])
            }),
            username: new FormControl("", Validators.required, this.checkUsername),
            email: new FormControl("", [
                Validators.required,
                Validators.pattern(emailRegExp)
            ]),
            password: new FormControl("", Validators.required),
            confirm: new FormControl(""),
            hobby: new FormArray([])
        });

        //Set validators after declaring
        this.form.get("confirm").setValidators([
            Validators.required,
            this.checkEqual.bind(this)
        ]);

        //Set object/model to form
        this.form.setValue(this.user);

        //Set custom watcher to specific field
        this.form.get("username").valueChanges.subscribe(data => {
            console.log(data);
        });
        this.form.get("username").statusChanges.subscribe(data => {
            console.log(data);
        });
        this.form.get("password").valueChanges.subscribe(data => {
            let confirmInput = this.form.get("confirm");

            if (confirmInput.value) {
                confirmInput.updateValueAndValidity();
            }
        });
    };

    private save():void {
        console.log(this.form);
        console.log(this.form.value);

        let hobbyArray:FormArray = (<FormArray>this.form.get("hobby"));
        for(let i = hobbyArray.length - 1; i >= 0; i--) {
            hobbyArray.removeAt(i);
        }

        this.form.reset(this.user);
    };

    private addHobby():void {
        (<FormArray>this.form.get("hobby")).push(
            new FormControl("", Validators.required)
        );
    };

    //Custom Validator - Synchronous
    private nameBanned(control:FormControl):{[s:string]:boolean} {
        let names:string[] = ["lionel messi", "luis suarez", "david villa", "gerald piqué", "david de gea"];
        let value:string = control.value.toLowerCase();
        let isFound:boolean = false;

        names.forEach((name:string) => {
            if (name === value ) {
                isFound = true;
                return;
            }
        });

        if (isFound) {
            return {
                namebanned: true
            };
        } else {
            return null;
        }
    };

    //Custom Validator - Synchronous
    private checkEqual(control:FormControl):{[s:string]:boolean} {
        if (control.value !== this.form.get("password").value) {
            return {
                checkequal: true
            };
        }

        return null;
    };

    //Custom Validator - Asynchronous
    private checkUsername(control:FormControl):Promise<any> | Observable<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "mugiwara") {
                    resolve({checkusername: true});
                } else {
                    resolve(null);
                }
            }, 3000);
        });
    };
};
