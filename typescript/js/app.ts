
/****************** Let *****************/
let message: string = "Hello World"; //Life of let depends on where it is created, so this variable lives in whole file

if (true) {
    let message: string = "Good bye"; //This variable lives only into if condition
}

//console.log(message);



/****************** Const *****************/
const OPTIONS: string = "Anywhere"; //Const avoids a variable to change after creating it

if (true) {
    const OPTIONS: string = "Only here"; //But you can create the same const in different scopes
}

//console.log(OPTIONS);



/****************** Sort of values *****************/
//After setting the specific value to a variable, that variable can't receive other values
let firstName: string = "Peter";
let age: number = 20;
let isAdult: boolean = true;
let birthday: Date = new Date("1991-10-25");
let fruits: Array<string> = ["Banana", "Apple"];
let numbers: number[] = [1, 2, 3];


//When setting type as any, that variable can receive whatever values
let general: any;
general = firstName;
general = age;
general = isAdult;
general = birthday;


//Using "enum" keyword to define numbers automatically to a set of attributes.
/*enum Directions {
    Up,
    Down = 2,
    Left,
    Right
};
console.log(Directions);*/


/*
When setting type as Object, could do it by two ways:
First one, specifying each attribute that object has.
*/
/*let spiderman: {name: string, age: number} = {
    name: "Peter",
    age: 20
};

function checkAdult(data:{name: string, age: number}): void {
    //Specify object by this case, can access to attributes by dot.
    console.log(data.age > 18);
};

checkAdult(spiderman);*/

/*
Second one, just set type as Object. But using this way, typescript will throw
error when trying to access the object attributes but dot.
*/
/*let superman: object = {
    name: "Clack",
    age: 24
};

function checkAdult(data: object): boolean {
    //Specify object by Object, can't access to attributes by dot.
    //return data.age > 18; //This will throw an error.

    return data["age"] > 18; //Should access by this way.
};

console.log(checkAdult(superman));*/



/****************** Literal template *****************/
let lastName: string = "Ou";
firstName = "Ming Chung";
age = 25;

let getFullName: Function = (): string => {
    return `${firstName} ${lastName}`;
};

/*let text: string = `Hello, ${firstName} ${lastName}(${age})`;
console.log(text);

text = `${1 + 2 + 3}`;
console.log(text);

text = `${getFullName()}`;
console.log(text);*/



/****************** Required/Optional parameters in function *****************/
/*
- Never set optional parameters at first.
- By default, all optional parameters are defined as null.
*/
/*let active: Function = (who: string, stuff: string = "the red signal", moment?: string): void => {
    let message: string;

    if (moment) {
        message = `${who} activated ${stuff} in ${moment}`;
    } else {
        message = `${who} activated ${stuff}`;
    }

    console.log(message);
};
active("Gordon", "a bomb", "in the morning");
active("Batman", "a distress signal");*/



/****************** Arrow function *****************/
//Scenario 1
/*let myFunction: Function = a => console.log(a);
myFunction("Hey");*/


//Scenario 2
/*let myFunction: Function = (a: number, b: number) => console.log(a + b);
myFunction(1, 2);*/


//Scenario 3
/*let myFunction: Function = (name: string) => {
    return console.log(name.toUpperCase());
};
myFunction("Julio");*/


//Scenario 4
/*let hulk: {name: string, smash: Function} = {
    name: "Hulk",
    smash() {
        //Here, this is pointing the object name attribute and not the global name variable
        setTimeout(() => console.log(this.name + " smash!"), 2000);
    }
};
hulk.smash();*/



/****************** Object/Array destruction *****************/
//Object
/*let avenger: {xName: string, key: string, power: string} = {
    xName: "Steve",
    key: "Captain America",
    power: "Drog"
};

let {xName, key, power} = avenger; //Can't specify the type of variables here
console.log(xName, key, power);*/

//Array
let avengers: string[] = ["Thor", "Steve", "Tony"];

/*let [thor, capi, ironman] = avengers;
console.log(thor, capi, ironman);*/

/*let [ , , ironman] = avengers;
console.log(ironman);*/



/****************** Promise *****************/
/*let prom: Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        //reject();
    }, 1500);
});

console.log("Step 1");
prom.then(() => {
    console.log("Done");
}, () => {
    console.log("Failed");
});
console.log("Step 2");*/



/****************** Interfaces *****************/
//Used to validate the type of object
//Example 1
interface Xmen {
    name: string;
    power: string;
};

let performMission: Function = (xmen: Xmen): void => {
    console.log(`Send ${xmen.name} to this mission`);
};

let wolverine: Xmen = {
    name: "Wolverine",
    power: "Regenerate"
};

//performMission(wolverine);


//Example 2
interface Batman {
    name: string;
    abilities: string[];
};

let batman: Batman = {
    name: "Bruno Díaz",
    abilities: ["Karate", "Aikido", "Wing Chu", "Jiu-Jitsu"]
};


//Example 3
/*interface IException {
    message: string;
    number?: number;
};

interface IErrorHandler {
    exceptions: Array<IException>;
    logException(message: string, number?: number): void;
};

class ErrorHanlder implements IErrorHandler {
    exceptions: Array<IException> = [];

    logException(message: string, number?: number): void {
        number = number || -1;

        this.exceptions.push({
            message,
            number
        });
    };
};

let errorHandler: ErrorHanlder = new ErrorHanlder();
errorHandler.logException("Request not found", 404);
errorHandler.logException("Occur an error");
console.log(errorHandler.exceptions);*/



/****************** Class *****************/
//Have to init the properties and make them visible
/*class Avenger {
    private name: string = "";
    private team: string = "";
    private nickName: string = "";
    private canFight: boolean = false;
    private fightWon: number = 0;

    constructor(name: string, team: string, nickName: string) {
        this.name = name;
        this.team = team;
        this.nickName = nickName;
    };

    public getName(): string {
        return this.name;
    };
};

let antman: Avenger = new Avenger("Scott Lang", "Cap", "Antman");
console.log(antman.getName());*/



/****************** Decorators *****************/
/*
Decorators
- It is one of design patterns.
- It helps to add special annotations that impact how behave the classes or functions.
- There are four types of decorators: class decorator, property decorator, method decorator,
parameter decorator.
- More info:
    https://github.com/arolson101/typescript-decorators
    https://gist.github.com/remojansen/16c661a7afd68e22ac6e
*/

//Class decorator
//Case 1 - Decorator to add "greet" function by default.
/*let Welcome: Function = (target: Function): void => {
    target.prototype.greet = (): void => {
        console.log("Hello");
    };
};

@Welcome
class Greeting {
    constructor() {

    };
};

let greeting: Greeting = new Greeting();
greeting.greet();*/

//Case 2 - Decorator to print the greeting passed by parameter.
/*let Welcome: Function = (salute: string): Function => {
    return (target: Function): void => {
        target.prototype.greet = (): void => {
            console.log(salute);
        };
    };
};

@Welcome("How are you?")
class Greeting {
    constructor() {

    };
};

let greeting: Greeting = new Greeting();
greeting.greet();*/


//Property decorator
/*let OnChange: Function = (callback: any) => {
    return (target: object, key: string): void => {
        let value: string = this[key];

        if (delete this[key]) {
            Object.defineProperty(target, key, {
                get: (): string => {
                    return value;
                },
                set: (newValue: string): void => {
                    value = newValue;
                    callback.onchange.call(this, value);
                }
            });
        }
    };
};

class Fruit {
    @OnChange({
        onchange: (newValue: string): void => {
            console.log(`The fruit is ${newValue} now`);
        }
    })
    public name: string;
};

let fruit: Fruit = new Fruit();
fruit.name = "banana";
fruit.name = "apple";*/



/*
Note
- More info: http://www.typescriptlang.org/docs/handbook/basic-types.html
*/
