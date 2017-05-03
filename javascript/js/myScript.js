/****************** Output *****************/

var greeting = function(name, self) {
    self.innerHTML = "Hello " + name;
};

//document.write("<p>I'm practicing for an interview.</p>");
//window.alert("Hello World");


/****************** typeof/instanceof *****************/
/*console.log(typeof greeting);
console.log(typeof "abc");
console.log(typeof 123);
console.log(typeof 3.14);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof true);
console.log(typeof {});
console.log(typeof isNull);
console.log(typeof []);

console.log([] instanceof Array);
console.log({} instanceof Object);*/


/****************** String *****************/
var myString = "Javascript is very extense programming language";

/*console.log(myString.length);
console.log(myString.indexOf("very")); //Return the first match position
console.log(myString.lastIndexOf("e")); //Return last match position
console.log(myString.search("very")); //Better than indexOf
console.log(myString.slice(7, 15)); //Extract portion of string according to limitation
console.log(myString.substring(7, 15)); //Same as slice
console.log(myString.substr(7, 15));
console.log("blue red green blue red green".replace(/e/g, "@"));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log("Hello".concat(" ", "Ming", " ","Chung")); //Join n string
console.log(myString.charAt(0)); //Get character of string according to position
console.log(myString.split(" ")); //Convert string to array*/


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
console.log(Math.sqrt(64));
console.log(Math.abs(-4));
console.log(Math.ceil(4.0001)); //Round up
console.log(Math.floor(4.9999)); //Round down
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.floor(Math.random() * 10) + 1); //Get random number 1 - 10*/


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
console.log(xArray1.pop()); //Remove last item
xArray1.push("Kiwi"); //Add new item to last
console.log(xArray1.toString());
console.log(xArray1.shift()); //Remove first item
xArray1.unshift("Lemon"); //Add new item to first
console.log(xArray1.toString());
xArray1.splice(2, 0, "Banana", "Mango"); //Add item(s) from specific position
console.log(xArray1.toString());
xArray1.splice(0, 1); //Remove item set
console.log(xArray1.toString()); //Remove an item at specific position
console.log(xArray1.concat(xArray2, xArray3).toString()); //Join n arrays
console.log(xArray1.slice(1).toString());
console.log(xArray1.sort().toString()); //Sort strings
xArray3.sort(function(a, b) { //Sort numbers asd
    return a - b;
});
console.log(xArray3.toString());
xArray3.sort(function(a, b) { //Sort numbers desc
    return b - a;
});
console.log(xArray3.toString());
console.log(xArray4.sort(function(a, b) { //Order object string asc
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
var ex = /r$/i;
//console.log(myString.match(ex));

ex = /^i/i;
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
//ex = /n./gi;
ex = /.n/gi;
//console.log(myString.match(ex));

myString = "Ming Chung";
ex = /(.+) (.+)/;
//ex = /(\w+) (\w+)/;
//console.log(myString.replace(ex, "$2 $1"));

myString = "Ming Chung";
ex = /ming(?=\s)/i;
//console.log(myString.match(ex));

myString = "3.1415";
ex = /\d+(?!\.)/g;
//console.log(myString.match(ex));

myString = "Los Angeles is the place where you can have fun on vacation.";
ex = /on|is/gi;
//console.log(myString.match(ex));

myString = "Caaaaandy25";
//ex = /\d{2}/;
ex = /a{1,}/;
//console.log(myString.match(ex));

myString = "Los Angeles is the place where you can have fun on vacation.";
ex = /[a-c]+/gi;
//console.log(myString.match(ex));

ex = /[^a-c]+/gi;
//console.log(myString.match(ex));

myString = "(506)86653047";
ex = /^(\(\d{3}\))?\s?[0-9]{8}/;
//console.log(myString.match(ex));

myString = "mingchungou@gmail.com.cr";
ex = /^[^()\/\\\[\]@#$%&?¡!¿{}<>]+@[a-zA-Z0-9]+(?:\.[a-zA-Z]{2,3}){1,2}/;
//console.log(myString.match(ex));


/****************** Errors *****************/
//Used for executing several tasks but controlling the errores
//debugger;
/*try {
	getDate();
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


/****************** Object *****************/
function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
};

myObject = new Person("Michael", "Forbes", 35, "brown");
delete myObject.age;
//console.log(myObject);

//Add new attribute and function to constructor object
Person.prototype.country = "";
Person.prototype.getName = function() {
    return this.firstName.concat(" ", this.lastName);
};

myObject = new Person("Maria", "Alpizar", 24, "blue", "Costa Rica");
myObject.country = "Costa Rica";
//console.log(myObject);


/****************** Object - Heritage *****************/
function Worker(first, last, age, eye, profession) {
    Person.call(this, first, last, age, eye); //Inherit the attributes from object Person to Worker but not the properties of object Person
    this.profession = profession;
};

Worker.prototype = Object.create(Person.prototype); //Add properties from object Person to Worker
Worker.prototype.constructor = Worker; //But wanting to keep Worker own constructor

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
//Call whatever function but tring the object passed by parameter as this
//Special character is receiving extra parameters as usual
var sayHello = function(name_person, greeting) {
	console.log("Hola soy " + this.firstName + ", y saludo a " + name_person + " con " + greeting);
}

//sayHello.call(myObject, "Juan", "afecto");


/****************** Apply *****************/
//Call whatever function but tring the object passed by parameter as this
//Special character is receiving extra parameters as an unique array
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
//Method to create interactive applications where works asynchronous
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
	xhttp.open("GET", "localData/myXml.xml", true);
	xhttp.send();
};

var getXMLData = function(xmlData) {
	var paises = xmlData.getElementsByTagName("paises")[0],
		pais = paises.getElementsByTagName("pais"),

		table = "<table><thead><tr><th>Nombre</th><th>Color</th><th>Habitantes</th></tr></thead><tbody>";
	for (x = 0; x < pais.length; x++) {
		table += "<tr>";
		table += "<td>" + pais[x].getElementsByTagName("nombre")[0].innerHTML + "</td>";
		table += "<td>" + pais[x].getElementsByTagName("color")[0].innerHTML + "</td>";
		table += "<td>" + pais[x].getElementsByTagName("habitantes")[0].innerHTML + "</td>";
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


/****************** Promise *****************/
//Method to do a task asynchronous, but the result could be available now, future or never.
var tryLoadingFile = function() {
    return new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();

    	xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve("Loading correctly");
                } else {
                    reject("Error on loading");
                }
            }
    	};
    	xhttp.open("GET", "localData/myXml.xm", true);
    	xhttp.send();
    });
};

tryLoadingFile().then(function(res) {
    console.log(res);
}, function(err) {
    console.log(err);
});


//use strict: in other word strict mode, and it helps us to detect syntasis errors
