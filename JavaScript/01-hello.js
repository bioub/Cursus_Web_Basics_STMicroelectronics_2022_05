const names = ['Romain', 'Eric', 'Jean'];

/**
 * @param {string} name
 */
function hello(name) {
  return 'Hello ' + name;
}

for (const n of names) {
  console.log(hello(n));
}
