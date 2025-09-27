// "npm init" creates a package.json file
// "type": "module", in package.json allows the use of ES6 modules
import { randomSuperhero } from 'superheroes';
// why does importing a function require curly braces?

var superhero = randomSuperhero();
console.log(superhero);