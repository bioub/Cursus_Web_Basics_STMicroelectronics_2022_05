console.log(
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet aut, ducimus consequatur libero nulla dicta molestiae quidem sit illo doloribus quod, fugiat necessitatibus excepturi incidunt! Doloremque impedit debitis tenetur.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia amet aut, ducimus consequatur libero nulla dicta molestiae quidem sit illo doloribus quod, fugiat necessitatibus excepturi incidunt! Doloremque impedit debitis tenetur.',
);

// SPREAD Objet
// conversion syntaxique
// d'un objet ex: {x: 1, y: 2}
// vers une liste de clé/valeur x: 1, y: 2
const coords = { x: 1, y: 2 };

const cloneCoords = { ...coords };
const coordsImmuable = { ...coords, z: 3 };

// REST Objet
// conversion syntaxique
// d'une liste de clé/valeur x: 1, y: 2
// vers objet ex: {x: 1, y: 2}

const coords3d = { x: 1, y: 2, z: 3 };
const { z, ...coords2d } = coords3d;
console.log(coords2d); // {x: 1, y: 2}


const entries = [['x', 1], ['y', 2]];
console.log(Object.fromEntries(entries)) // {x: 1, y: 2}



// ES2021 Logical Assignment Operator

const nbs = [1, 9, 3, 17, 8];

let testLowerThan10 = true;

for (const nb of nbs) {
  // testLowerThan10 = testLowerThan10 && (nb < 10);
  testLowerThan10 &&= (nb < 10);
}



const oneBillion = 1_000_000_000;
