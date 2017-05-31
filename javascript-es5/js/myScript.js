
/****************** Output *****************/
var greeting = function(name, self) {
    self.innerHTML = "Hello " + name;
};

//document.write("<p>I'm practicing for an interview.</p>");
//window.alert("Hello World");



/****************** typeof/instanceof *****************/
/*console.log(typeof greeting); //Will show function.
console.log(typeof "abc"); //Will show string.
console.log(typeof 123); //Will show number.
console.log(typeof 3.14); //Will show number.
console.log(typeof NaN); //Will show number.
console.log(typeof Infinity); //Will show number.
console.log(typeof true); //Will show boolean.
console.log(typeof {}); //Will show object.
console.log(typeof isNull); //Will show undefined.
console.log(typeof []); //Will show object, not correct.

console.log([] instanceof Array); //Will show true, better way to check if element is array.
console.log({} instanceof Object); //Will show true.*/



/****************** Selectors *****************/
//Get all elements created by the tag targeted and return an array with all elements found.
//console.log(document.getElementsByTagName("li"));

//Get all elements with the class targeted and return an array with all elements found.
//console.log(document.getElementsByClassName("list-item"));

//Get an element with the id targeted and return that element.
//console.log(document.getElementById("title1"));

//Get all elements with the name targeted and return an array with all elements found.
//console.log(document.getElementsByName("email"));

//Get all elements with css selector and return an array with all elements found.
//console.log(document.querySelectorAll(".list-item"));

//Get the first element with css selector and return that element.
//console.log(document.querySelector("li"));



/****************** String *****************/
var myString = "Javascript is very extense programming language is";

/*console.log(myString.length);
console.log(myString.indexOf("very")); //Return the first match position.
console.log(myString.lastIndexOf("is")); //Return last match position.
console.log(myString.search("very")); //Better than indexOf, can search by regular expresion.
console.log("blue red green blue red green".replace(/e/g, "@"));*/

/*console.log(myString.slice(7, 15)); //Extract portion of string x <= i < y.
console.log(myString.substring(7, 15)); //Same as slice.
console.log(myString.substr(7, 15)); //From index selected, extract next 15 characters.*/

/*console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log("Hello".concat(" ", "Ming", " ","Chung")); //Join n string.
console.log(myString.charAt(0)); //Get character of string according to position.
console.log(myString.split(" ")); //Convert string to array.*/

//Revert the string
//console.log(myString.split(" ").reverse().join(" "));



/****************** Number *****************/
var myNumber = 123;

/*console.log(isNaN(myString));
console.log(myNumber.toString()); //Convert number to string.
console.log(myNumber.toExponential(2));
console.log(Math.PI.toFixed(5));
console.log(Math.PI.toPrecision(5));
console.log(parseInt("100")); //Convert string to number.
console.log(Math.round(Math.PI));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64)); //Calculate square root.
console.log(Math.abs(-4)); //Get absolute number.
console.log(Math.ceil(4.0001)); //Round up.
console.log(Math.floor(4.9999)); //Round down.
console.log(Math.min(0, 150, 30, 20, -8, -200)); //Get minimum number.
console.log(Math.max(0, 150, 30, 20, -8, -200)); //Get maximum number.
console.log(Math.floor(Math.random() * 10) + 1); //Get randomly a number 1 - 10.*/



/****************** Array *****************/
var xArray1 = ["Banana", "Apple", "Orange", "Mango"],
	xArray2 = ["Watermelon", "Melon", "Grape"],
	xArray3 = [98, 43, 1, 23, 130],
	xArray4 = [
		{type: "Volvo", year: 2016},
		{type: "Saab", year: 2001},
		{type: "BMW", year: 2010}
	],
    xArray5 = [
        {firstname : "Luffy", lastname: "Monkey D."},
        {firstname : "Zoro", lastname: "Roronoa"},
        {firstname : "Sanji", lastname: "Vinsmoke"}
    ];

/*console.log(Array.isArray(xArray1)); //Check whether of not is array.
console.log(xArray1.toString()); //Convert array to string.
console.log(xArray1.join(" - ")); //Its similar as toString but you can add personal separator.*/

/*xArray1.pop(); //Remove last item.
console.log(xArray1.toString());
xArray1.push("Kiwi"); //Add new item to last.
console.log(xArray1.toString());
xArray1.unshift("Lemon"); //Add new item at first.
console.log(xArray1.toString());
xArray1.shift("Lemon"); //Remove first item.
console.log(xArray1.toString());*/

//Add item(s) from specific position
/*xArray1.splice(2, 0, "Pear", "Pineapple");
console.log(xArray1.toString());

//Remove an item at specific position
xArray1.splice(2, 1); //Return the item removed
console.log(xArray1.toString());*/

/*console.log(xArray1.concat(xArray2, xArray3).toString()); //Join n arrays.
console.log(xArray1.slice(1).toString()); //Take out a portion of array.
console.log(xArray1.reverse().toString()); //Reverse the array.*/

//Sort strings asc
/*console.log(xArray1.sort().toString());

//Sort strings desc
console.log(xArray1.sort(function(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
}).toString());

//Sort numbers asc
xArray3.sort(function(a, b) {
    return a - b;
});
console.log(xArray3.toString());

//Sort numbers desc
xArray3.sort(function(a, b) {
    return b - a;
});
console.log(xArray3.toString());

//Order object string asc
console.log(xArray4.sort(function(a, b) {
    aux1 = a.type.toLowerCase();
    aux2 = b.type.toLowerCase();
    if (aux1 < aux2) return -1;
    if (aux1 > aux2) return 1;
}));*/

//Using map
//Go through each array item and execute the function sent with each item.
/*function getFullName(item, index) {
    console.log(index);
    console.log([item.lastname, item.firstname].join(" "));
};

xArray5.map(getFullName);*/

//Using filter
//Return a new array with items that passd the condition.
/*console.log(xArray3.filter(function(item, index) {
    return item <= 100;
}));*/



/****************** Label *****************/
/*loop1:
for(var i = 0; i < 3; i++) {
    loop2:
    for (var j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            //continue loop1;
            continue loop2;
            //break loop1;
            //break loop2;
        }

        console.log("".concat("i= ", i, ", j=", j));
    }
}*/

//Can't use continue within a code block.
/*var date = new Date();
var test = function() {
	label1:
	x = 5;
	document.write(x);

	label2: {
		label3: {
			if (date.getDay() % 2 === 0) x -= 2;
			else x += 2;
			document.write(x);
		}

		label5: if ((date.getMonth() + 1) % 2 === 0) break label2;

		label6: if (!x) break label2;

		label7: if (x === 3) document.write("Tres tristes tigres");
		else if (x === 7) document.write("Number 7 Machine");
	}
}

test();*/



/****************** Regular expression *****************/
myString = "I am a eateR";
var ex = /r$/gi;
//console.log(myString.match(ex));

ex = /^i/gi;
//console.log(myString.match(ex));

myString = "A black ghost booooed is going Baack home.";
ex = /bo*/gi;
//console.log(myString.match(ex));

ex = /bo+/gi;
//console.log(myString.match(ex));

myString = "Los Angeles is the place where you can have fun on vacation.";
ex = /e?le?/gi;
//console.log(myString.match(ex));

myString = "123abc";
ex = /\d+?/;
//console.log(myString.match(ex));

myString = "Nano nanda an orange island nothing";
ex = /n./gi;
//ex = /.n/gi;
//console.log(myString.match(ex));

myString = "Ming Chung";
//ex = /(.+) (.+)/;
ex = /(\w+) (\w+)/;
//console.log(myString.replace(ex, "$2 $1"));

ex = /ming(?=\s)/gi;
//console.log(myString.match(ex));

//Check if element is a html tag
myString = "<table>";
ex = /\<(?=\w)\w+\>(?=$)/gi;
//console.log(myString.match(ex));

myString = "3.1415";
ex = /\d+(?!\.)/g;
//console.log(myString.match(ex));

myString = "Los Angeles is the place where you can have fun on vacation.";
ex = /on|is/gi;
//console.log(myString.match(ex));

myString = "CaaaAAaandy2515";
ex = /\d{2}/g;
//ex = /a{1,}/gi;
//console.log(myString.match(ex));

myString = "Los Angeles is the place where you can have fun on vacation.";
ex = /[a-c]+/gi;
//console.log(myString.match(ex));

ex = /[^a-c]+/gi;
//console.log(myString.match(ex));

myString = "(506)86653047";
ex = /^(\(\d{3}\))?\s?[0-9]{8}/g;
//console.log(myString.match(ex));

myString = "mingchungou@gmail.com.cr";
ex = /^[^()\/\\|\[\]@#$%&?¡!¿{}<>"'`~,:;\^]+@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,3}){1,2}$/g;
//console.log(myString.match(ex));



/****************** Errors *****************/
//Used for executing several tasks but controlling the errores.

/*try {
	//getDate();
	if (isNaN(x)) throw "x is not a Number";
} catch(err) {
	console.log(err.message);
} finally {
	console.log("Get End");
}*/



/****************** JSON *****************/
myString = JSON.stringify(xArray4);
/*console.log(myString);
console.log(JSON.parse(myString));*/

var myObject = {"name": "Ming Chung", "Birth": new Date()};
//console.log(JSON.stringify(myObject));



/****************** Object class *****************/
function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
    this.isAdult = function() {
        return this.age > 18;
    };
};

//Delect object attributes
/*myObject = new Person("Michael", "Forbes", 35, "brown");

delete myObject.age;
console.log(myObject);*/

//Add new attribute and function to declaration class
Person.prototype.country = "";
Person.prototype.getName = function() {
    return this.firstName.concat(" ", this.lastName);
};

/*myObject = new Person("Maria", "Alpizar", 16, "blue");
myObject.country = "Costa Rica";
console.log(myObject);
console.log("Full name: " + myObject.getName());
console.log("Is adult: " + myObject.isAdult());*/



/****************** Object - Heritage *****************/
function Worker(first, last, age, eye, profession) {
    //Inherit the attributes from object Person to Worker but not the properties of object Person.
    Person.call(this, first, last, age, eye);
    this.profession = profession;
};

//Inheriting Person prototype to Worker object
Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

myObject = new Worker("Ming", "Ou", 25, "black", "Engineer");
/*console.log(myObject);
console.log("Full name: " + myObject.getName());
console.log(myObject instanceof Person);
console.log(myObject instanceof Worker);*/



/****************** Arguments *****************/
/*var sumAll = function() {
    myNumber = 0;

	for (var i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i])) return;
		myNumber += arguments[i];
	}

	return myNumber;
};

console.log(sumAll(1, 2, 3, 4, 5));*/



/****************** Call *****************/
/*
- Call whatever function but trying the object passed by parameter as this.
- Able to receive extra parameters as usual.
*/

/*var sayHello = function(namePerson, greeting) {
	console.log("Hola soy " + this.firstName + ", y saludo a " + namePerson + " con " + greeting);
};

sayHello.call(myObject, "Juan", "afecto");*/



/****************** Apply *****************/
/*
- Call whatever function but tring the object passed by parameter as this.
- Able to receive extra parameters as an array.
*/

//sayHello.apply(myObject, ["Juan", "afecto"]);



/****************** Closure *****************/
//Functions that handles independent variables and remembers them.

/*var add = function() {
	var counter = 0;
	return function() {
		return counter += 1;
	};
};

var executeAdd = add();
executeAdd();
executeAdd();
console.log(executeAdd());*/



/****************** Ajax *****************/
//Method to create interactive applications where have functions to work asynchronous.

/*var loadData = function() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			if (this.responseXML) {
				getXMLData(this.responseXML);
			} else {
				getJSONData(this.responseText);
			}
		}
	};
	xhttp.open("GET", "localData/myJson.json", true);
	xhttp.send();
};

var getXMLData = function(xmlData) {
	var paises = xmlData.getElementsByTagName("paises")[0],
		pais = paises.getElementsByTagName("pais"),

		table = "<table><thead><tr><th>Nombre</th><th>Color</th><th>Habitantes</th></tr></thead><tbody>";
	for (x = 0; x < pais.length; x++) {
		table += "<tr>";
		table += "<td>" + pais[x].getElementsByTagName("nombre")[0].childNodes[0].nodeValue + "</td>";
		table += "<td>" + pais[x].getElementsByTagName("color")[0].childNodes[0].nodeValue + "</td>";
		table += "<td>" + pais[x].getElementsByTagName("habitantes")[0].childNodes[0].nodeValue + "</td>";
		table += "</tr>";
	}

    table += "</tbody></table>";
	document.body.innerHTML += table;
};

var getJSONData = function(jsonData) {
	var paises = JSON.parse(jsonData).paises,
        table = document.createElement("table"),
        theader = document.createElement("thead"),
        tbody = document.createElement("tbody"),
        tr,
        td,
        attr;

    tr = document.createElement("tr");
    td = document.createElement("th");
    td.innerHTML = "Nombre";
    tr.appendChild(td);
    td = document.createElement("th");
    td.innerHTML = "Color";
    tr.appendChild(td);
    td = document.createElement("th");
    td.innerHTML = "Habitantes";
    tr.appendChild(td);
    theader.appendChild(tr);
    table.appendChild(theader);

	for (var i = 0; i < paises.length; i++) {
		tr = document.createElement("tr");
		for(attr in paises[i]) {
            td = document.createElement("td");
            td.innerHTML = paises[i][attr];
            tr.appendChild(td);
		}
        tbody.appendChild(tr);
	}

    table.appendChild(tbody);
	document.body.appendChild(table);
};

loadData();*/



/****************** Callback *****************/
//Callback function that is executed after current one finished.

/*function doSomething(callback) {
    callback();
};

function justPrint() {
    console.log("Printing");
};

doSomething(justPrint);*/



/****************** Events *****************/
/*
- When adding the event by html, then event object is not possible to catch.
- Only adding event by javascript, event object is catchable.
*/

/*
Semantic event
- Adding event by this way, the event can't be removed until the page is closed.
*/

/*document.querySelector("#button1").onclick = function(ev) {
    console.log("Semantic event");
    console.log(ev);
};*/

/*
Multiple event
- By this, the event can be added and removed at any moment.
- Also can handle event flow.
*/

/*var button1 = document.querySelector("#button1");

function catchEvent(ev) {
    console.log("Multiple event");
    console.log(ev);
    button1.removeEventListener("click", catchEvent);
};

button1.addEventListener("click", catchEvent, false);*/

//Cancel default event by preventDefault
/*document.querySelector(".facebook-link").onclick = function(ev) {
    ev.preventDefault();
    console.log("Default event is avoided");
};*/



/****************** Event flow - Bubbling/Capture phases *****************/
/*
Bubling phase
- To activated this phase, the boolean parameter should be in false.
- The bubbling is spreading the event from more inside element to more outside element.
*/

/*
Capture phase
- To activated this phase, the boolean parameter should be in true.
- The capture is spreading the event from more outside element to more inside element.
*/

/*function catchEvent(ev) {
    console.log("Hello " + this.className);
    console.log("The event click is generated by " + ev.target.className);

    //If want to stop event spread, then using stopPropagation
    //ev.stopPropagation();
};

var divs = document.querySelectorAll("div[class^='div-']");

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", catchEvent, false);
}*/

/*
- According to this example, if using bubbling, when clicking the div-three, then click
event is spread throw div-two, div-one and body.
- But if using capture, when clicking the div-three, the click event starts from body,
then div-one, then div-two and finally div-three.
*/



/****************** Declared function vs Expressed function *****************/
/*
Declared function
- When declaring a function, then that function is declared function.
- Declared functions belong to global.
- In javascript, declared stuff and global stuff are read in compile phase. And execution
stuff and instantiation stuff are read in execution phase.
*/

/*sayHello(); //So this will execute correctly.

function sayHello() {
    console.log("Hello World");
};*/

/*
Expressed function
- When storing a function into a variable, then that function is expressed function.
- Expressed functions belong to variables and not to global.
*/

/*sayHello(); //This will throw an error.

var sayHello = function() {
    console.log("Hello World");
};*/



/****************** Anonymous function *****************/
/*
- Functions which are created without name.
- One advantage is when it is declared, at the same time it is being used.
- One disadvantage is when wanting to use it in other moment, then its impossible.
*/

/*window.onload = function() {
    console.log("This is an anonymous function");
};*/



/****************** Auto-executable function *****************/
/*
- Into first parantheses contains the function.
- The second parenthesis is executing the function, into the second parenthesis can add
the parameters that the function needs.
- One advantage is avoiding touch between libraries that using same symbol to represent
themselve, like jquery, underscore, lodash...
*/

//Classic declaration
/*(function(d, w, n, $) {
    console.log("This is an auto-executable classic function");
    console.log(d, w, n);
    $("#title1").css({color: "#00ff00"});
})(document, window, navigator, jQuery);*/

//Crockford declaration
/*((function(d, w, n, $) {
    console.log("This is an auto-executable crockford function");
})(document, window, navigator, jQuery));*/

//Unary declaration
/*+function(d, w, n, $) {
    console.log("This is an auto-executable unary function");
}(document, window, navigator, jQuery);*/

//Facebook declaration
/*!function(d, w, n, $) {
    console.log("This is an auto-executable facebook function");
}(document, window, navigator, jQuery);*/



/****************** Pattern design - Singleton *****************/
/*var User = (function() {
    var user;

    function create() {
        var object = new Object();
        object.firstName = "Ming Chung";
        object.lastName = "Ou";
        object.age = 25;
        return object;
    };

    return {
        getUser: function() {
            if (!user) {
                user = create();
            }

            return user;
        }
    };
})();

var user = User.getUser();
console.log(user);*/



/*
Note:
- "use strict"; - in other word strict mode, and it helps us to detect syntasis errors
- debugger; - works as breakpoint.
- Three main variables of parent are: document, window, navigator
- Document contains all html page elements
- Window contains all global stuff, like global objects, functions, variables, etc.
- Navigator has browser information.
*/
