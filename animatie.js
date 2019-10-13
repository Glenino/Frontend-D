/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


var button1 = document.querySelector("button");
var element1 = document.querySelector(".js");

button1.addEventListener("click", function() {
  element1.classList.toggle("yay");
});

/* bron javascript/html/css code: https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/ */