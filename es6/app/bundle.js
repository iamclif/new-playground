/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	for (let i = 0; i < 45; i++) {
	  var div = document.createElement('div');

	  div.onclick = function () {
	    alert('you clicked on a box #' + i);
	  };
	  var section = document.getElementById('foo');
	  section.appendChild(div);
	}

	function coldEnough(deg) {
	  const freezingTemp = 32;
	  if (freezingTemp <= deg) {
	    return deg + ' is above freezing';
	  } else {
	    return deg + ' is not above freezing';
	  }
	}

	console.log(coldEnough(72));
	console.log(coldEnough(12));

	function print(firstName) {
	  console.log(`Hello my name is ${ firstName }`);
	}
	print('Slim Shady');

	var cats = ['foo', 'bar', 'foobar'];

	var dogs = ['jim', 'jam', 'jimmyjam'];
	var animals = ['Lion', 'Whale', 'Bird', ...cats, 'snake', ...dogs];

	console.log(animals);

	var cat = {
	  meow: function (times) {
	    console.log(Array(times + 1).join('meow'));
	  },
	  purr: function (times) {
	    console.log(Array(times + 1).join('purr'));
	  },
	  snore: function (times) {
	    console.log(Array(times + 1).join('snore'));
	  }
	};

	cat.meow(5);
	cat.purr(9);
	cat.snore(1);

	var clif = {
	  foo(times) {
	    console.log('foo'.repeat(times));
	  },
	  bar(times) {
	    console.log('bar'.repeat(times));
	  },
	  foobar(times) {
	    console.log('foobar'.repeat(times));
	  }
	};

	clif.foo(1);
	clif.bar(2);
	clif.foobar(3);

	var functionBefore = function (myParam) {
	  console.log(myParam);
	};
	functionBefore(['foo', 'bar', 'foobar']);

	var functionAfter = yourParam => console.log(yourParam);
	functionAfter(['this', 'is', 'an', 'array']);

	var person = {
	  first: 'doug',
	  actions: ['bike', 'hike', 'ski', 'surf'],
	  printActions: function () {
	    this.actions.forEach(function (action) {
	      var str = this.first + ' likes to ' + action;
	      console.log(str);
	    }.bind(this));
	  }
	};
	person.printActions();

	var personES6 = {
	  first: 'doug',
	  actions: ['new bike', 'new hike', 'new ski', 'new surf'],
	  printActions() {
	    this.actions.forEach(action => {
	      var str = this.first + ' likes to ' + action;
	      console.log(str);
	    });
	  }
	};
	personES6.printActions();

	// ES5
	// var selected = allJobs.filter(function (job) {
	//   return job.isSelected();
	// });

	// ES6
	// var selected = allJobs.filter(job => job.isSelected());

	var myCities = ['San Francisco', 'Renton', 'Burien', 'Kenmore', 'Seattle', 'Washington', 'New York'];

	var [, first, second, third, fourth,,,] = ['San Francisco', 'Renton', 'Burien', 'Kenmore', 'Seattle', 'Washington', 'New York'];

	console.log(first);

	var { name, price } = {
	  name: 'big',
	  price: 9,
	  description: 'Very Yummy',
	  ingredients: ['bread', 'butter', 'lettuce', 'tomato', 'cheese']
	};

	console.log(name, price);

	function* director() {
	  yield 'ten';
	  yield 'nine';
	}

	var action = director();

	console.log(action.next().value);

	function* eachItem(arr) {
	  for (var i = 0; i < arr.length; i++) {
	    yield arr[i];
	  }
	}

	var letters = eachItem(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

	var abcs = setInterval(function () {
	  var letter = letters.next();
	  if (letter.done) {
	    clearInterval(abcs);
	    console.log('Now I Know My A B C\'s');
	  } else {
	    console.log(letter.value);
	  }
	}, 500);

	// ES 6 CLASSES
	class Vehicle {
	  constructor(description, wheels) {
	    this.description = description;
	    this.wheels = wheels;
	  }
	  describeYourself() {
	    console.log(`I am a ${ this.description } with ${ this.wheels } wheels`);
	  }
	}
	var foo = new Vehicle('truck', 4);
	foo.describeYourself();

	// extend class

	class SemiTruck extends Vehicle {
	  constructor() {
	    super('Semi Truck', 18);
	  }
	}

	var bigTruck = new SemiTruck();

	bigTruck.describeYourself();

	// THIS IS A CLOSURE
	function outerFunction(arg) {
	  var variableInOuterFunction = arg;

	  function bar() {
	    console.log(variableInOuterFunction); // Access a variable from the outer scope
	  }

	  // Call the local function to demonstrate that it has access to arg
	  bar();
	}

	outerFunction("hello closure"); // logs hello closure!


	// end of document

/***/ }
/******/ ]);