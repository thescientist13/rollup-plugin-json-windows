// this breaks with could not resolve source error on Windows / macOS
import square from './square.js?foo=bar';
import json from './data.json?foo=bar';

// this works Windows / macOS
// but warns about unresolved dependencies only on Windows
// import square from 'square.js?foo=bar';
// import json from 'data.json?foo=bar';

// this works as expected on Windows / macOS
// import square from './square.js';
// import json from './data.json';


alert(square(10));
alert(JSON.stringify(json));