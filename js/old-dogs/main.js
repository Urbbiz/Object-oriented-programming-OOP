import { SingleDog } from './SingleDog.js';

const rexius = new SingleDog('Rexas', 'rudas', 'Vokieciu aviganis');
const brisius = new SingleDog('Brisius', 'pilkas', 'Lietuvos lenciuginis');

// console.log(rexius);
// console.log(brisius);

// console.log(rexius.breed);
// console.log(brisius.breed);

rexius.introduce();
brisius.introduce();

console.log(rexius.lovedPeople);

rexius.addLovedPerson('Zymantas');
rexius.addLovedPerson('Andrejus');



/*
Gyvunai kaip objektai:
- turi:
    - varda
    - spalva
    - veisle
    - judejimo greitis = 0
- gali:
    - prisistatyk
    - isskleisti garsa
    - judeti
*/




const s = { name: 's' }