window.onload = (function () {

	var results = document.getElementById("results");

	// a variable that sores a function
	var add = function (a, b) {
		return a + b;
	};
		
	console.log(add(3, 4))

	//	Create myObject. It has a value and an increment
	//	method. The increment method takes an optional
	//	parameter. If the argument is not a number, then 1
	//	is used as the default.

	//	METHOD INVOCATION PATTERN
	//	Invoking a method = a method is a function of an object

	//	A method can use this to access the object so that it can retrieve values from the
	//	object or modify the object. The binding of this to the object happens at invocation
	//	time. This very late binding makes functions that use this highly reusable. Methods
	//	that get their object context from this are called public methods.
	var myObject = {
		value: 0,
		increment: function (inc) {
			this.value += typeof inc === "number" ? inc : 1;
		}
	};

	myObject.increment(3);
	results.innerHTML = myObject.value;

	//	FUNCTION INVOCATION PATTERN
	// When a function is not the property of an object, then it is invoked as a function:

	var result = add(5, 6);
	results.innerHTML += "<br /><br />" + result;

	//	When a function is invoked with this pattern, this is bound to the global object.
	//	This was a mistake in the design of the language. Had the language been designed
	//	correctly, when the inner function is invoked, this would still be bound to
	//	the this variable of the outer function.

	//	Fortunately, there is an easy workaround. If the method defines a variable and assigns it
	//	the value of this, the inner function will have access to this through that variable. By
	//	convention, the name of that variable is that:

	// Augmnent myObject with a double method.
	myObject.double = function () {
		var that = this;  // Workaround - inner function can see this, but can't manipulate

		var helper = function () {
			that.value = add(that.value, that.value);
		}

		helper();
	};

	myObject.double();
	results.innerHTML += "<br /><br />" + myObject.value;

	//	CONSTRUCTOR INVOCATION PATTERN

	//	JavaScript is a prototypal inheritance language. That means that objects can inherit
	//	properties directly from other objects. The language is class-free.

	//	If a function is invoked with the new prefix, then a new object will be created with a
	//	hidden link to the value of the function’s prototype member, and this will be bound
	//	to that new object.

	var Quo = function (string) {
		this.status = string;
	}

	Quo.prototype.get_status = function () {
		results.innerHTML += "<br /><br />" + this.status;
	};
	var newObj = new Quo("Okey dokey!");
	newObj.get_status();

	//	Functions that are intended to be used with the new prefix are called constructors.By
	//	convention, they are kept in variables with a capitalized name.

	//	Use of this style of constructor functions is not recommended. We will see better
	//	alternatives in the next chapter.


	//	APPLY INVOCATION PATTERN
	//	Because JavaScript is a functional object-oriented language, functions can have methods.
	
	//	The apply method lets us construct an array of arguments to use to invoke a func-
	//	tion. It also lets us choose the value of this. The apply method takes two parame-
	//	ters. The first is the value that should be bound to this. The second is an array of
	//	parameters.

	var array = [3, 4];

	result = add.apply(null, array);

	results.innerHTML += "<br /><br />add.apply(null, array); = " + result;

	var statusObject = {
		status: "AOK"
	};

	var status = Quo.prototype.get_status.apply(statusObject);

	//	ARGUMENTS
	//	A bonus parameter that is available to functions when they are invoked is the
	//	arguments array. It gives the function access to all of the arguments that were supplied
	//	with the invocation, including excess arguments that were not assigned to
	//	parameters. This makes it possible to write functions that take an unspecified number
	//	of parameters:






});