const names = ['Romain', 'Eric', 'Jean'];

/**
 * @param {string} name
 */
function hello(name) {
  return 'Hello ' + name;
}

// const hello = function (name) {
//   return 'Hello ' + name;
// };

// setTimeout(function (name) {
//   return 'Hello ' + name;
// }, 1000);

for (const n of names) {
  console.log(hello(n));
}
