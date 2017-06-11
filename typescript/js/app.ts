
/****************** Let *****************/
let message:string = "Hello World"; //Life of let depends on where it is created, so this variable lives in whole file

if (true) {
    let message:string = "Good bye"; //This variable lives only into if condition
}

//console.log(message);



/****************** Const *****************/
const OPTIONS = "Anywhere"; //Const avoids a variable to change after creating it

if (true) {
    const OPTIONS = "Only here"; //But you can create the same const in different scopes
}

//console.log(OPTIONS);



/****************** Sort of values *****************/
//After setting the specific value to a variable, that variable can't receive other values
let firstName:string = "Peter";
let age:number = 20;
let isAdult:boolean = true;
let birthday:Date = new Date("1991-10-25");


//When setting type as any, that variable can receive whatever values
let general:any;
general = firstName;
general = age;
general = isAdult;
general = birthday;


/*
When setting type as Object, could do it by two ways:
First one, specifying each attribute that object has.
*/
/*let spiderman:{name:string, age:number} = {
    name: "Peter",
    age: 20
};

function checkAdult(data:{name:string, age:number}):void {
    //Specify object by this case, can access to attributes by dot.
    console.log(data.age > 18);
};

console.log(checkAdult(spiderman));*/

/*
Second one, just set type as Object. But using this way, typescript will throw
error when trying to access the object attributes but dot.
*/
/*let superman:Object = {
    name: "Clack",
    age: 24
};

function checkAdult(data:Object):boolean {
    //Specify object by Object, can't access to attributes by dot.
    //return data.age > 18; //This will throw an error.

    return data["age"] > 18; //Should access by this way.
};

console.log(checkAdult(superman));*/



/****************** Literal template *****************/
let lastName:string = "Ou";
firstName = "Ming Chung";
age = 25;

let getFullName:Function = () => {
    return `${firstName} ${lastName}`;
};

/*let text:string = `Hello, ${firstName} ${lastName}(${age})`;
console.log(text);

text = `${1 + 2 + 3}`;
console.log(text);

text = `${getFullName()}`;
console.log(text);*/



/****************** Required/Optional parameters in function *****************/
//Never set optional paramters at first
/*let active:Function = (who:string, stuff:string = "the red signal", moment?:string) => {
    let message:string;

    if (moment) {
        message = `${who} activated ${stuff} in ${moment}`;
    } else {
        message = `${who} activated ${stuff}`;
    }

    console.log(message);
};
active("Gordon", "a bomb", "in the morning");*/



/****************** Arrow function *****************/
//Scenario 1
/*let myFunction:Function = a => console.log(a);
myFunction("Hey");*/


//Scenario 2
/*let myFunction:Function = (a:number, b:number) => console.log(a + b);
myFunction(1, 2);*/


//Scenario 3
/*let myFunction:Function = (name:string) => {
    return console.log(name.toUpperCase());
};
myFunction("Julio");*/


//Scenario 4
/*let hulk:{name:string, smash:Function} = {
    name: "Hulk",
    smash() {
        setTimeout(() => console.log(this.name + " smash!"), 2000); //Here, this is pointing the object name attribute and not the global name variable
    }
};
hulk.smash();*/



/****************** Object/Array destruction *****************/
//Object
let avenger:{xName:string, key:string, power:string} = {
    xName: "Steve",
    key: "Captain America",
    power: "Drog"
};

/*let {xName, key, power} = avenger; //Can't specify the type of variables here
console.log(xName, key, power);*/

//Array
let avengers:string[] = ["Thor", "Steve", "Tony"];

/*let [thor, capi, ironman] = avengers;
console.log(thor, capi, ironman);*/

/*let [ , , ironman] = avengers;
console.log(ironman);*/



/****************** Promise *****************/
/*let prom:Promise = new Promise((resolve, reject) => {
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
    name:string,
    power:string
};

let performMission = (xmen:Xmen) => {
    console.log(`Send ${xmen.name} to this mission`);
};

let wolverine:Xmen = {
    name: "Wolverine",
    power: "Regenerate"
};

//performMission(wolverine);


//Example 2
interface Batman {
    name:string;
    abilities:string[];
};

let batman:Batman = {
    name: "Bruno Díaz",
    abilities: ["Karate", "Aikido", "Wing Chu", "Jiu-Jitsu"]
};



/****************** Class *****************/
//Have to init the properties and make them visible
class Avenger {
    name:string = "";
    team:string = "";
    nickName:string = "";
    canFight:boolean = false;
    fightWon:number = 0;

    constructor(name:string, team:string, nickName:string) {
        this.name = name;
        this.team = team;
        this.nickName = nickName;
    };
};

/*let antman:Avenger = new Avenger("Scott Lang", "Cap", "Antman");
console.log(antman);*/


//Decorator
/*let myConsole = (constructor:Function) => {
    console.log(constructor);
};

@myConsole
class Member {
    constructor(public name:string) {

    };
};*/
