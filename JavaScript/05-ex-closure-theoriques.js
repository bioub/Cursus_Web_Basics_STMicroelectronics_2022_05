for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// A - ..1s.. 0 ..1s.. 1 ..1s.. 2
// B - ..1s.. 0 1 2
// C - ..1s.. 2 2 2
// D - ..1s.. 3 3 3

// pile d'appels
// ^
// |
// |
// |                                     lg    lg    lg
// |for { st - st - st  } (i==3)         fct - fct - fct
// +-------------------------------------1s------> temps
//                                       3     3     3

function externe(iSave) {
  return function() {
    console.log(iSave);
  }
}

for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
