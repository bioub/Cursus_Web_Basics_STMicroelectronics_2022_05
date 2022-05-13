setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// 1 - A B C D E
// 2 - E B A D C
// 3 - B E A D C
// 4 - E B D A C

// pile d'appels
// ^
// |
// |
// |                           lg              lg    lg         lg
// |st - st - st - st - lg ... cbB ...         cbA - cbD ...    cbC
// 0---------------------------2ms---------------------------------------------> temps
//                      E      B               A     D

// File d'attente de timers (task)
// 0ms : cbB
// 2ms :
// 499ms : cbA cbD
// 500ms : cbD
// 501ms :
// 999ms : cbC
// 1000ms :

// Jake Archibald : In the loop
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
