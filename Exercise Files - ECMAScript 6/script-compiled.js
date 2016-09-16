// var nameBuilder = function(firstName="Joe", lastName="Doe") {
// 			console.log(firstName + " " + lastName);
// 		};

// nameBuilder();
'use strict';

console.log('ffo');

var _loop = function (i) {
    console.log(i);
    div = document.createElement('div');

    div.onclick = function () {
        alert("you clicked on a box #" + i);
    };
    document.getElementsByTagName('section')[0].appendChild(div);
};

for (var i = 0; i < 45; i++) {
    var div;

    _loop(i);
}
