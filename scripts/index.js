// import {Car} from './modules/carClass.js'; 
// import {sayHi} from './modules/fUnction.js';
// import literal from './modules/oBject.js';
// import aRra from './modules/aRray.js';
import config from '../config.js'; // json exported as module 
console.log('test the state of the repo');

let items = config.items;
items.forEach(e=>console.log(`genre: ${e.genre} & category: ${e.category}`));
    
// });
console.log(config.items);
