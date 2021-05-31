// these break
import square from './square.js?foo=bar';
import json from './data.json?foo=bar';


// these are fine
// import square from './square.js';
// import json from './data.json';


alert(square(10));
alert(JSON.stringify(json));