import {Car} from './modules/carClass.js';
import {sayHi} from './modules/fUnction.js';
import config from '../config.js'; // json exported as module 

let allEntries = config;
console.log(allEntries);


// alert(sayHi); // function...
sayHi('John'); // Hello, John!
let car = new Car('mazda');
console.log(car);
