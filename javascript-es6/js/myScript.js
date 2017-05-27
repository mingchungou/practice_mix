
/****************** Var vs let *****************/
/*
Case 1
- Var doesn't force you to create it before using it, so here returns undefined.
- Let forces you to create it before using it, so here returns an error.
*/

/*console.log(message);
var message = "Hello World";*/

/*console.log(message);
let message = "Hello World";*/


/*
Case 2
- Variebles created by let live only into that scope.
*/

/*if (true) {
    let message = "Hello World"; //Message exists only inside the if condition
}
console.log(message); //So you will get error of not defined*/


/*
Case 3
- Var allows to re-declare the same variable.
- Let doesn't allow to re-declare the same variable.
*/

/*var message = "Hello";
var message = "123";
var message = "abc";
console.log(message); //You will see the last declaration value*/

/*let message = "Hello";
var message = "World"; //You will get an error*/


/*
Case 4
- Let allows to declare the same variable but in different scopes.
*/

/*let message = "Hello World";
if (true) {
    let message = "Hello Ming"; //This won't throw any error, but case 2 applies here
}
console.log(message); //Will see the message declared from window scope*/


//case 5
//Exercise - show 0 - 4
//By ES5
/*var functionsArray = [];
for (var i = 0; i < 5; i++) {
    //Using closure can make this to work
    functionsArray.push(
        (function(value) {
            return function() {
                console.log(value);
            };
        })(i)
    );
    //But this code is kind of complicated
}

functionsArray.forEach(function(item) {
    item(); //Will show 0 - 4
});*/

//By ES6
/*var functionsArray = [];
for (let i = 0; i < 5; i++) { //Using let can solve var problem
    functionsArray.push(function() {
        console.log(i);
    });
}

functionsArray.forEach(function(item) {
    item(); //Will show 0 - 4
});*/



/****************** Const *****************/
/*
Case 1
- Const variables should be declared with its value.
*/

//const SALES_TAX; //Will throw an error


/*
Case 2
- Const variables can't be modified even in different scopes.
*/

/*const SALES_TAX = 15.25;
SALES_TAX = 10; //Will throw an error*/


/*
Case 3
- Variables created by const live only into that scope.
*/

/*if (true) {
    const SALES_TAX = 10.25; //Sales tax exists only inside the if condition
}
console.log(SALES_TAX); //So you will get error of not defined*/


/*
Case 4
- Const allows to declare the same variable but in different scopes.
*/

/*const SALES_TAX = 15.25;
if (true) {
    const SALES_TAX = 10.25; //This won't throw any error, but case 3 applies here
}
console.log(SALES_TAX); //Will see the sales tax declared from window scope*/


/*
Case 5
- Const variables are able to contain anything.
*/

/*const ABLE_TO_FIGHT = true,
    TAXS = 15.25,
    NICKNAME = "GOKU",
    PERSON = {
        firstName: "Ming Chung",
        lastName: "Ou",
        age: 25
    },
    FAV_FRUITS = ["Apple", "Pear", "Orange", "Banana"];

//But you can change object attributes and array items
PERSON.firstName = "Maicol";
FAV_FRUITS[0] = "Watermelon";
FAV_FRUITS.push("Grape");

//Declaring const doesn't replace variable type
console.log(typeof PERSON); //Show object
console.log(typeof NICKNAME); //Show string
console.log(typeof ABLE_TO_FIGHT); //Show boolean*/



/****************** New methods for strings *****************/
let greeting = "Hello World";

//Using startsWith - check if first character(s) of string is COMPARED_VALUE, return boolean
/*console.log(greeting.startsWith("He")); //Show true
//Can add from which index of string want to check
console.log(greeting.startsWith("Wor", 6)); //Show true*/


//Using endsWith - check if last character(s) of string is COMPARED_VALUE, return boolean
/*console.log(greeting.endsWith("d")); //Show true
console.log(greeting.endsWith("o", 5)); //Show true*/


//Using includes - check if COMPARED_VALUE exists in the string, return boolean
/*console.log(greeting.includes("or")); //Show true
console.log(greeting.includes("ll", 2)); //Show true*/


//Using repeat
/*let names = ["Ming", "Fernando", "Melissa"],
    phones = ["12345678", "87654321", "12348765"],
    spaces = 16;

for (i in names) {
    let dif = spaces - names[i].length;
    console.log(names[i] + " ".repeat(dif) + "|" + phones[i]);
}*/


//Literal template
/*let name = "Ming Chung",
    lastName = "Ou",
    fullName;

function getFullName() {
    return `${name} ${lastName}`;
};

fullName = `Hello ${name} ${lastName}`;
console.log(fullName);
fullName = `Hello ${getFullName()} ${1 + 2}`;
console.log(fullName);

let multiline = `<h1>${name}</h1>
<p>Hello World</p>`;
console.log(multiline);*/


//Tamplates by tags
/*let pencilCost = 2,
    amout = 5;

function tag(literal, ...subs) {
    let result = "";

    for (let i = 0; i < subs.length; i++) {
        result += literal[i] + subs[i];
    }

    return result;
};

let message = tag `${amout} ${(amout > 1) ? "pencils" : "pencil"} ${(amout > 1) ? "cost" : "costs"} $${pencilCost * amout}`;
console.log(message);*/


//Using raw - only works for literal templates
/*let message = String.raw `Hello \nWorld\\`;
console.log(message); //Will show specific characters*/



/****************** Functions *****************/
//Optional parameters
//Exercise - checking if parameters are not empty

//By ES5
/*function sayHello5(message, time) {
    message = message || "Hello World";
    time = time || 1500;
    setTimeout(function() {
        console.log(message);
    }, time);
};
sayHello5();

//In ES6
function sayHello6(message = "Hello World", time = 1500) {
    setTimeout(function() {
        console.log(message);
    }, time);
};
sayHello6();*/

//Also can set default functions and objects in parameters
/*function fnTemporal() {
    console.log("Hello World");
};

function execute(fn = fnTemporal, person = {name: "Ming Chung"}) {
    fn();
    console.log(person);
};

execute(fnTemperal, {name: "Melissa"});*/

//In addcition, optional parameters affect arguments array
/*function sum(a = 1, b = 2) {
    console.log(arguments); //Will show empty arguments array
};

sum();*/


/*
Rest parameters
- Each function can recieve only one rest parameter.
- Rest parameter should be placed in the last parameter.
*/

//Exercise - adding N new students into the student array
//By ES5
/*function addStudent5() {
    for (var i = 1; i < arguments.length; i++) {
        arguments[0].push(arguments[i]);
    }

    return arguments[0];
};

var studentArray5 = ["Ming"];
console.log(addStudent5(studentArray5, "María", "Pedro", "Susana"));

//By ES6
function addStudent6(studentArray, ...students) {
    for (let i = 0; i < students.length; i++) {
        studentArray.push(students[i]);
    }

    return studentArray;
};

let studentArray6 = ["Ming"];
console.log(addStudent6(studentArray6, "María", "Pedro", "Susana"));*/


//Spread
//Exercise - finding maximun number
//By ES5
/*var numbers = [1, 5, 10, 20, 100, 234],
    maximun5 = Math.max.apply(Math, numbers);
console.log(maximun5);

//By ES6
let maximun6 = Math.max(...numbers);
console.log(maximun6);*/


//Differences between rest and Spread
/*function helloRest(greeting, ...names) {
    for (i in names) {
        console.log(`${greeting} ${names[i]}`);
    }
};

function helloSpread(greeting, ...names) {
    console.log(`${greeting} ${names}`);
};

helloRest("Hey", "Chopper", "Franky", "Brook");
helloSpread("Hey", ["Chopper", "Franky", "Brook"]);

//Another example to spread usage
let parts = ["arms", "legs"];
let body = ["head", "neck", ...parts, "feet", "fingers"];
console.log(body);*/


//Function behavior as class
//ES5
/*function Person5(name) {
    if (this instanceof Person5) { //By this condition can avoid missing new statement error
        this.name = name;
    } else {
        throw new Error("Have to init with new");
    }
};

var personX5 = new Person5("Luffy");
//var personY5 = Person5("Luffy"); //This error is avoid
var personZ5 = Person5.call(personX5, "Luffy"); //But this error is still untarget

//ES6
function Person6(name) {
    if (typeof new.target !== "undefined") { //By this condition, force to use new to instance this object
        this.name = name;
    } else {
        throw new Error("Have to init with new");
    }
};

var personX6 = new Person6("Luffy");
//var personY6 = Person6("Luffy"); //This error is avoid
//var personZ6 = Person6.call(personX6, "Luffy"); //This error is avoid*/



/****************** Arrow functions *****************/
/*
- Don't have arguments array, but it can take the closer parent arguments.
- Don't have this object, but it can take the closer parent this.
- Don't have a constructor.
*/

//Function with no parameter
//By ES5
/*var myFunction5 = function() {
    console.log("Hello New World");
};
myFunction5();

//By ES6
let myFunction6 = () => console.log("Hello New World");
myFunction6();*/


//Function with one parameter
//By ES5
/*var myFunction5 = function(value) {
    console.log(value);
};
myFunction5(true);

//By ES6
let myFunction6 = value => console.log(value);
myFunction6(true);*/


//Function with two or more parameters
//By ES5
/*var myFunction5 = function(param1, param2) {
    console.log(param1 + param2);
};
myFunction5(1, 2);

//By ES6
let myFunction6 = (param1, param2) => console.log(param1 + param2);
myFunction6(1, 2);*/


//Function with contain more than 1 line
//By ES5
/*var sayHello5 = function(name) {
    var result = "Hello " + name;
    console.log(result);
};
sayHello5("Nico Robin");

//By ES6
let sayHello6 = name => {
    let result = `Hello ${name}`;
    console.log(result);
};
sayHello6("Nico Robin");*/


//Function that returns an object
//By ES5
/*var getBook5 = function(id) {
    return {
        id: id,
        name: "One Piece"
    };
};
console.log(getBook5(1));

//By ES6
let getBook6 = id => ({id: id, name: "One Piece"});
console.log(getBook6(1));*/


//Anonymous function
//By ES5
/*(function(name) {
    console.log("Hello " + name);
})("Nami");

//By ES6
(name => console.log(`Hello ${name}`))("Nami");*/


//Controlling this object into another env function
//By ES5
/*var controller5 = {
    id: "123",
    init: function() {
        document.addEventListener("click", (function(ev) {
            this.clickToPage(ev.type);
        }).bind(this), false);
    },
    clickToPage: function(type) {
        console.log("Controlling " + type + " for id: " + this.id);
    }
};

//By ES6
var controller6 = {
    id: "123",
    init: function() {
        document.addEventListener("click", ev => this.clickToPage(ev.type));
    },
    clickToPage: function(type) {
        console.log("Controlling " + type + " for id: " + this.id);
    }
};*/


//Arrays
/*var array = [5, 10, 11, 2, 1, 9, 20];
console.log(array.sort((a, b) => a - b));*/


//Other examples
/*let subtract = (a, b) => a - b;
console.log(typeof subtract); //Will show function
console.log(subtract instanceof Function); //Will show true

(function subtract(a, b) {
    ((a, b) => {
        console.log(arguments); //Will show parent arguments array
    })();
})(1, 2);

((a, b) => {
    console.log(arguments[0]); //Will throw an error, because of arguments undefined
})();*/



/****************** Objects *****************/
/*
Creating literal object
- If attribute name is the same than value container name, then can write it only once.
*/

/*function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age
    };
};
console.log(createPerson("Sanji", "Vinsumoku", 21));*/


/*
Concise function
- Able to take out function statement.
*/

/*let person = {
    name: "God Ussop",
    getName() {
        console.log(this.name);
    }
};
person.getName();*/


/*
Computed properties in Object
- Able to build the object attributes.
*/

/*let suffix = "first ",
    myself = {
        [suffix + "name"]: "Luffy",
        [suffix + "lastname"]: "Monkey D.",
        [suffix + "girlfriend"]: "Boa Hancock"
    };
console.log(myself[suffix + "lastname"] + " " + myself["first name"]);*/


//New method - Object.is
//NaN is the same than NaN
/*console.log(NaN == NaN); //Will show false, incorrect
console.log(NaN === NaN); //Will show false, incorrect
console.log(Object.is(NaN, NaN)); //Will show true, correct*/


//New method - Object.assign
//Exercise - Merge second object properties to first one
//By ES5
/*function mix5(objReceiver, objDonor) {
    Object.keys(objDonor).forEach(function(key) {
        objReceiver[key] = objDonor[key];
    });

    return objReceiver;
};

var zoro = {
        "name": "Zoro",
        "ability": "Santoryu"
    },
    ace = {
        "name": "Ace",
        "demonFruit": "Mera Mera no mi",
        getName() {
            return this.name;
        },
        get attack1() { //This method is not able to transfer to receiver object, but converting this method in attribute
            return "Hiken";
        }
    };
console.log(mix5(zoro, ace));

//By ES6
console.log(Object.assign(zoro, ace));*/


/*
Object attributes new order standard
- All number attributes will show first as asc, then string attributes show after as asc.
*/

/*let myObject = {
        c: 1,
        0: 1,
        x: 1,
        15: 1,
        r: 1,
        3: 1,
        b: 1
    };
myObject.d = 1;
myObject["2"] = 1;
myObject["a"] = 1;
console.log(Object.getOwnPropertyNames(myObject).join(","));
console.log(Object.keys(myObject));
console.log(JSON.stringify(myObject));*/



/****************** Object prototype *****************/
//Inherit properties
/*function Person(name) {
    this.name = name;
    this.attack1 = function() {
        console.log("Gomu gomu no Pistol");
    };
    this.attack2 = function() {
        console.log("Gomu gomu no Rocket");
    };
};
var personX = new Person("Unknown");

//By ES5
var person5 = {
        name:"Zoro"
    };
person5 = Object.create(personX); //Inherit Person properties to person5
console.log(person5); //Doesn't keep its own properties
person5.attack1();
console.log(Object.getPrototypeOf(person5) === personX); //Will show true

//By ES6
let person6 = {
        name:"Zoro"
    };
Object.setPrototypeOf(person6, personX); //Inherit Person properties to person6
console.log(person6); //Keep its own properties
person6.attack1();
console.log(Object.getPrototypeOf(person6) === personX); //Will show true*/


//Call inherited functions
/*let person = {
        greeting() {
            return "Hello";
        }
    };

let friend = {
        greeting() {
            //By ES5 - accessing inherited function
            //return Object.getPrototypeOf(this).greeting.call(this) + ", how are you!";

            //By ES6 - accessing inherited function
            return super.greeting() + ", how are you!";
        }
    };
Object.setPrototypeOf(friend, person); //Inheriting properties of person to friend
console.log(friend.greeting());*/



/****************** Destructuring *****************/
/*
Object destructuring
- Convert object attributes to separate variables.
- Doesn't mind the order of variables, but name of variables need to match object attributes.
*/

/*let settings = {
        name: "Ming Chung",
        email: "mingchungou@gmail.com",
        facebook: "mingchung.777",
        google: "mingchung.123",
        premium: true
    };

let {name, email, facebook, google, premium} = settings;
console.log(name, email, facebook, google, premium);

//Set different variable name instead of object attribute
let {premium:payment} = settings;
console.log(payment);*/


/*
- Able to set default value to variable.
- If variable matches to object attribute, then variable will take object attribute value.
- If not, then using default value.
*/

/*let {twitter:accounTwi = "ming08"} = settings;
console.log(accounTwi);*/


//Nested object destructuring
/*let autoSaved = {
        file: "app.js",
        cursor: {
            line: 7,
            column: 16
        },
        lastFile: {
            file: "index.html",
            cursor: {
                line: 8,
                column: 20
            },
            extraFile: {
                file: "myScript.js",
                cursor: {
                    line: 41,
                    column: 74
                }
            }
        }
    };

//Accessing to second floor attribute
let {lastFile:{cursor:actCursor2}} = autoSaved;
console.log(actCursor2);

//Accessing to third floor attribute
let {lastFile:{extraFile:{cursor:actCursor3}}} = autoSaved;
console.log(actCursor3);*/


/*
Array destructuring
- Convert array items to separate variables.
- Order of variables cares.
*/

/*let fruits = ["Apple", "Banana", "Melon", "Pineapple"];

let [fruit1, fruit2, fruit3, fruit4] = fruits;
console.log(fruit1, fruit2, fruit3, fruit4);

//Get specific index
let [,,thirdFruit] = fruits;
console.log(thirdFruit);*/


/*
- Able to set default value to variable.
- If variable matches to array item, then variable will take array item value.
- If not, then using default value.
*/

/*let sports = ["Soccer"];

let [sport1, sport2 = "PaintBall"] = sports;
console.log(sport1, sport2);*/


//Exchange data between two variables
/*let a = 1,
    b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);*/


//Nested array destructuring
/*let colors = ["Black", ["Green", ["Orange", "Red", "Yellow"], "Brown"], "Purple"];

//Accessing second and third floor arrays
let [color1, [color2, [color3]]] = colors;
console.log(color2);
console.log(color3);

//Grouping rest items except first one into a new array
let [mainColor, ...restColors] = colors;
console.log(mainColor);
console.log(restColors);*/


//Parameter destructuring
/*let createGamer = (nickname, {hp, sp, type} = {hp: 450, sp: 70, type: "Ashe"}) => {
    console.log(nickname, hp, sp, type);
};

createGamer("Graves", {
    hp: 510,
    sp: 77,
    type: "Sniper"
});*/



/****************** Symbols *****************/
/*let firstName = Symbol(),
    ability = Symbol(),
    person = {
        [ability]: "Gomu Gomu no Bazooka" //Can create object attribute by symbol
    };
person[firstName] = "Luffy";
console.log(person[firstName]);
console.log(person[ability]); //But having to access that attribute by symbol as well


//Each symbol is unique although having same aria
let symbol1 = Symbol("onePiece"),
    symbol2 = Symbol("onePiece");
console.log(symbol1 == symbol2); //Will show false
console.log(symbol1 === symbol2); //Will show false
console.log(Object.is(symbol1, symbol2)); //Will show false
console.log(typeof symbol1); //Will show symbol
console.log(typeof symbol2); //Will show symbol*/


/*
Using Symbol.for() and Symbol.keyFor()
- Symbol.for() checks if there is a symbol created with key specified.
- If so, then loading that same symbol.
- If not, then creating a new one.
- Symbol.keyFor() shows the key used to create the symbol
*/

/*let userID = Symbol.for("userID"), //Creating symbol userID
    object = {};
object[userID] = "1234";
console.log(object[userID]);
console.log(userID);
console.log(Symbol.keyFor(userID));

let userID2 = Symbol.for("userID"); //Accessing to created symbol userID
console.log(userID == userID2); //Will show true
console.log(userID === userID2); //Will show true
console.log(Object.is(userID, userID2)); //Will show true
console.log(object[userID2]);
console.log(userID2);
console.log(Symbol.keyFor(userID2));*/


//Recovering symbol properties
/*let id = Symbol.for("id"),
    demonFruit = Symbol.for("demonFruit"),
    person = {
        [id]: "123",
        name: "Luffy",
        lastName: "Monkey D.",
        age: 17,
        ["ability"]: "Gomu Gomu no Bazooka",
        [demonFruit]: "Gomu Gomu no mi"
    };

for (let key in person) {
    console.log(key, person[key]);
}

let symbols = Object.getOwnPropertySymbols(person);

for (let key in symbols) {
    console.log(person[symbols[key]]);
}*/



/****************** Set *****************/
//Init set
/*let mySet = new Set([1, 2, 3, 4, 5, 6, 6, 6]);
console.log(mySet);
console.log(mySet.size); //Get size
console.log(mySet.has(3)); //Check if exists the specific item

//Insert items
mySet.add(7);
mySet.add("Luffy");
mySet.add(new Set([5, 6, 7, 8]));
mySet.add(["Apple", "Banana", "Orange", "Pineapple"]);
mySet.add({
    attack1: "Gomu Gomu no Pistol",
    attack2: "Gomu Gomu no Bazooka"
});
console.log(mySet);

//Remove items
mySet.delete(4);
mySet.delete(3);
mySet.delete(5);
console.log(mySet);

//Remove all
mySet.clear();
console.log(mySet);*/


//Use forEach()
/*let names = new Set(["Luffy", "Zoro", "Sanji", "Nami", "Chopper"]);
names.forEach((value, key, setOriginal) => console.log(`Key: ${key}, value: ${value}`));


//Convert set to array
let nameArray = [...names];
console.log(nameArray);*/


//Remove duplicated in array
/*let numbers = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7];

let removeDup = numbers => [...new Set(numbers)];
console.log(removeDup(numbers));*/



/****************** Map *****************/
//Init map
/*let myMap = new Map([["name", "Luffy"], ["age", 18]]);
console.log(myMap);
console.log(myMap.size); //Get size
console.log(myMap.has("name")); //Check if exists the specific item

//Add element
myMap.set("demonFruit", "Gomu Gomu no mi");
myMap.set("lastName");
myMap.set("lastName", "Ou");
myMap.set({}, {
    attack1: "Gomu Gomu no Pistol",
    attack2: "Gomu Gomu no Bazooka"
});
myMap.set("team", ["Zoro", "Sanji", "Ussop", "Nami"]);
myMap.set("visited", new Map([["location1", "Loguetown"], ["location2", "Impel Down"]]));
console.log(myMap);

//Get element
console.log(myMap.get("name"));
console.log(myMap.get("age"));

//Remove element
myMap.delete("lastName");
console.log(myMap);

//Remove value
myMap.set("team");
console.log(myMap);

//Remove all
myMap.clear();
console.log(myMap);*/


//Use forEach()
/*let myMap = new Map([["name", "Luffy"], ["age", 18]]);
myMap.forEach((value, key, original) => console.log(`Key: ${key}, value: ${value}`));*/



/****************** For of loop *****************/
//In array
/*let team = [
    {name: "Zoro", age: 21},
    {name: "Ussop", age: 18},
    {name: "Nami", age: 19},
    {name: "Luffy", age: 18}
];

for (let member of team) {
    console.log(member);
}

//In set
let mySet = new Set([
    {name: "Zoro", age: 21},
    {name: "Ussop", age: 18},
    {name: "Nami", age: 19},
    {name: "Luffy", age: 18}
]);

for (let member of mySet) {
    console.log(member);
}

//In map
let myMap = new Map([
    ["member1", {name: "Zoro", age: 21}],
    ["member2", {name: "Ussop", age: 18}],
    ["member3", {name: "Nami", age: 19}],
    ["member4", {name: "Luffy", age: 18}],
]);

for (let member of myMap) {
    console.log(member);
}*/



/****************** Classes *****************/
//Init class
/*class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
    };

    getName() {
        console.log(this.name);
    };
};

let luffy = new Person("Monkey D. Luffy");
luffy.getName();
console.log(luffy);*/


//Instance class as expression
/*let Person = class {
    constructor(name) {
        this.name = name;
        this.age = 0;
    };

    getName() {
        console.log(this.name);
    };
};

let luffy = new Person("Roronoa Zoro");
luffy.getName();
console.log(luffy);*/


//Class as parameter
//Example 1
/*let createClass = (classStatement, name) => {
    return new classStatement(name);
};

let person = createClass(class {
    constructor(name) {
        this.name = name;
        this.age = 0;
    };

    getName() {
        console.log(this.name);
    };
}, "Big Mom");
person.getName();
console.log(person);

//Example2
class Square {
    constructor(side) {
        this.side = side;
    };

    getArea() {
        return this.side * this.side;
    }
};

let calSquare = square => {
    if (square instanceof Square) {
        console.log(square.getArea());
    } else {
        console.error("The parameter is not a Square object");
        return;
    }
};

let table = new Square(4);
calSquare(table);*/


//Static properties and computed functions
/*let setName = "setName";

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
    };

    getName() {
        console.log(this.name);
    };

    //Computed function
    [setName](name) {
        this.name = name;
    };

    //Static function, it works independent of the class
    //Function should be called directly from the class, shouldn't be called by instances of the class
    static create(name) {
        return new Person(name);
    };
};

let person = Person.create("Monkey D. Luffy");
console.log(person);
person.setName("Roronoa Zoro");
console.log(person);*/


//Class heritage
/*class Rectangle {
    constructor(high, long) {
        this.high = high;
        this.long = long;
    };

    getArea() {
        return "Rectangle area: " + (this.high * this.long);
    };
};

class Square extends Rectangle {
    constructor(high) {
        super(high, high);
    };

    //Able to overwrite parent function
    getArea() {
        //Using own function
        return "Square area: " + (this.high * this.high);

        //Using parent getArea()
        //return super.getArea();
    };
};

let square = new Square(3);
console.log(square.getArea());
console.log(square instanceof Square); //Will show true
console.log(square instanceof Rectangle); //Will show true*/



/****************** Promise *****************/
/*
- One advantage is abling to bind N promises as wanting.
- Also is abling to know if the task finishes successful or fail
*/

/*let asynTask = () => {
    let promise = new Promise((resolve, rejecta) => {
        setTimeout(() => {
            console.log("Asynchronous process");
            resolve();
        }, 1300);
    });

    return promise;
};

asynTask().then(() => {
    console.log("OK");
}, () => {
    console.log("Error");
});

console.log("Sequential code");*/
