/****************** Output *****************/
var greeting = function(name, self) {
    self.innerHTML = "Hello " + name;
};

//document.write("<p>I'm practicing for an interview.</p>");
//window.alert("Hello World");



/****************** typeof/instanceof *****************/
/*console.log(typeof greeting); //Will show function
console.log(typeof "abc"); //Will show string
console.log(typeof 123); //Will show number
console.log(typeof 3.14); //Will show number
console.log(typeof NaN); //Will show number
console.log(typeof Infinity); //Will show number
console.log(typeof true); //Will show boolean
console.log(typeof {}); //Will show object
console.log(typeof isNull); //Will show undefined
console.log(typeof []); //Will show object, not correct

console.log([] instanceof Array); //Will show true, better way to check if element is array
console.log({} instanceof Object); //Will show true*/



/****************** String *****************/
var myString = "Javascript is very extense programming language is";

/*console.log(myString.length);
console.log(myString.indexOf("very")); //Return the first match position
console.log(myString.lastIndexOf("is")); //Return last match position
console.log(myString.search("very")); //Better than indexOf
console.log(myString.slice(7, 15)); //Extract portion of string according to limitation
console.log(myString.substring(7, 15)); //Same as slice
console.log(myString.substr(7, 15)); //From index selected, extract next 15 characters
console.log("blue red green blue red green".replace(/e/g, "@"));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log("Hello".concat(" ", "Ming", " ","Chung")); //Join n string
console.log(myString.charAt(0)); //Get character of string according to position
console.log(myString.split(" ")); //Convert string to array

//Revert the string
console.log(myString.split(" ").reverse().join(" "));*/



/****************** Number *****************/
var myNumber = 123;

/*console.log(isNaN(myString));
console.log(myNumber.toString()); //Convert number to string
console.log(myNumber.toExponential(2));
console.log(Math.PI.toFixed(5));
console.log(Math.PI.toPrecision(5));
console.log(parseInt("100")); //Convert string to number
console.log(Math.round(Math.PI));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64)); //Calculate square root
console.log(Math.abs(-4)); //Get absolute number
console.log(Math.ceil(4.0001)); //Round up
console.log(Math.floor(4.9999)); //Round down
console.log(Math.min(0, 150, 30, 20, -8, -200)); //Get minimum number
console.log(Math.max(0, 150, 30, 20, -8, -200)); //Get maximum number
console.log(Math.floor(Math.random() * 10) + 1); //Get randomly a number 1 - 10*/



/****************** Array *****************/
var xArray1 = ["Banana", "Apple", "Orange", "Mango"],
	xArray2 = ["Watermelon", "Melon", "Grape"],
	xArray3 = [98, 43, 1, 23, 130],
	xArray4 = [
		{type: "Volvo", year: 2016},
		{type: "Saab", year: 2001},
		{type: "BMW", year: 2010}
	];

/*console.log(Array.isArray(xArray1)); //Check whether of not is array
console.log(xArray1.toString()); //Convert array to string
console.log(xArray1.join(" - ")); //Its similar as toString but you can add personal separator
xArray1.pop(); //Remove last item
xArray1.push("Kiwi"); //Add new item to last
xArray1.unshift("Lemon"); //Add new item at first

//Add item(s) from specific position
xArray1.splice(2, 0, "Banana", "Mango");
console.log(xArray1.toString());

//Remove an item at specific position
xArray1.splice(4, 1); //Return the item removed
console.log(xArray1.toString());

console.log(xArray1.concat(xArray2, xArray3).toString()); //Join n arrays
console.log(xArray1.slice(1).toString()); //Take out a portion of array

//Sort strings asc
console.log(xArray1.sort().toString());

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



/****************** Label *****************/
/*loop1:
for(var i = 0; i < 3; i++) {
    loop2:
    for (var j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            //continue loop1;
            break loop1;
        }

        document.write("<span>i = " + i + ", j = " + j + "</span><br>");
    }
}

//Can't use continue within blocks
var date = new Date();
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



/****************** Regular Expression *****************/
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
ex = /^[^()\/\\\[\]@#$%&?¡!¿{}<>]+@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,3}){1,2}/g;
//console.log(myString.match(ex));



/****************** Errors *****************/
//Used for executing several tasks but controlling the errores
//debugger;
/*try {
	//getDate();
	if (isNaN(x)) throw "x is not a Number"
} catch(err) {
	if (err.message) console.log(err.message);
	else console.log(err);
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
};
myObject = new Person("Michael", "Forbes", 35, "brown");
//console.log(myObject);

delete myObject.age; //Delete object attribute
//console.log(myObject);

//Add new attribute and function to object class
Person.prototype.country = "";
Person.prototype.getName = function() {
    return this.firstName.concat(" ", this.lastName);
};

myObject = new Person("Maria", "Alpizar", 24, "blue");
myObject.country = "Costa Rica";
//console.log(myObject);



/****************** Heritage object *****************/
function Worker(first, last, age, eye, profession) {
    Person.call(this, first, last, age, eye); //Inherit the attributes from object Person to Worker but not the properties of object Person
    this.profession = profession;
};

//Inheriting prototype but not the constructor
Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

myObject = new Worker("Ming", "Ou", 25, "black", "Engineer");
/*console.log(myObject);
console.log(myObject.getName());
console.log(myObject instanceof Person);
console.log(myObject instanceof Worker);*/



/****************** Arguments *****************/
var sumAll = function() {
    myNumber = 0;

	for (var i = 0; i < arguments.length; i++) {
		if (isNaN(arguments[i])) return;
		myNumber += arguments[i];
	}

	return myNumber;
};

//console.log(sumAll(1, 2, 3, 4, 5));



/****************** Call *****************/
//Call whatever function but trying the object passed by parameter as this
//Able to receive extra parameters as usual
var sayHello = function(namePerson, greeting) {
	console.log("Hola soy " + this.firstName + ", y saludo a " + namePerson + " con " + greeting);
};

//sayHello.call(myObject, "Juan", "afecto");



/****************** Apply *****************/
//Call whatever function but tring the object passed by parameter as this
//Able to receive extra parameters as an array
//sayHello.apply(myObject, ["Juan", "afecto"]);



/****************** Closure *****************/
//Functions that handles independent variables and remembers them
var add = (function() {
	var counter = 0;
	return function() {
		return counter += 1;
	};
})();

/*add();
add();
console.log(add());*/



/****************** Ajax *****************/
//Method to create interactive applications where have functions to work asynchronous
var loadData = function() {
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

//loadData();



/****************** Callback *****************/
//Callback function is executed after current one finished
function doSomething(callback) {
    callback();
};

function justPrint() {
    console.log("Printing");
};

//doSomething(justPrint);

//use strict: in other word strict mode, and it helps us to detect syntasis errors
