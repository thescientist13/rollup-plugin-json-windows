# rollup-plugin-json-windows

A repro testing repo for Windows and Rollup (+ [**@rollup/plugin-json**](https://github.com/rollup/plugins/tree/master/packages/json)) and using query strings in `import` paths.  Following [this example](https://rollupjs.org/repl/?version=2.19.0&shareable=JTdCJTIybW9kdWxlcyUyMiUzQSU1QiU3QiUyMm5hbWUlMjIlM0ElMjJtYWluLmpzJTIyJTJDJTIyY29kZSUyMiUzQSUyMiUyRiolMjBEWU5BTUlDJTIwSU1QT1JUUyU1Q24lMjAlMjAlMjBSb2xsdXAlMjBzdXBwb3J0cyUyMGF1dG9tYXRpYyUyMGNodW5raW5nJTIwYW5kJTIwbGF6eS1sb2FkaW5nJTVDbiUyMCUyMCUyMHZpYSUyMGR5bmFtaWMlMjBpbXBvcnRzJTIwdXRpbGl6aW5nJTIwdGhlJTIwaW1wb3J0JTIwbWVjaGFuaXNtJTVDbiUyMCUyMCUyMG9mJTIwdGhlJTIwaG9zdCUyMHN5c3RlbS4lMjAqJTJGJTVDbmlmJTIwKGRpc3BsYXlNYXRoKSUyMCU3QiU1Q24lNUN0aW1wb3J0KCcuJTJGbWF0aHMuanMnKS50aGVuKGZ1bmN0aW9uJTIwKG1hdGhzKSUyMCU3QiU1Q24lNUN0JTVDdGNvbnNvbGUubG9nKG1hdGhzLnNxdWFyZSg1KSklM0IlNUNuJTVDdCU1Q3Rjb25zb2xlLmxvZyhtYXRocy5jdWJlKDUpKSUzQiU1Q24lNUN0JTdEKSUzQiU1Q24lN0QlMjIlMkMlMjJpc0VudHJ5JTIyJTNBdHJ1ZSU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJtYXRocy5qcyUyMiUyQyUyMmNvZGUlMjIlM0ElMjJpbXBvcnQlMjBzcXVhcmUlMjBmcm9tJTIwJy4lMkZzcXVhcmUuanMlM0Zmb28lM0RiYXInJTNCJTVDbiU1Q25leHBvcnQlMjAlN0JkZWZhdWx0JTIwYXMlMjBzcXVhcmUlN0QlMjBmcm9tJTIwJy4lMkZzcXVhcmUuanMnJTNCJTVDbiU1Q25leHBvcnQlMjBmdW5jdGlvbiUyMGN1YmUlMjAoeCUyMCklMjAlN0IlNUNuJTVDdHJldHVybiUyMHNxdWFyZSh4KSUyMColMjB4JTNCJTVDbiU3RCUyMiUyQyUyMmlzRW50cnklMjIlM0FmYWxzZSU3RCUyQyU3QiUyMm5hbWUlMjIlM0ElMjJzcXVhcmUuanMlM0Zmb28lM0RiYXIlMjIlMkMlMjJjb2RlJTIyJTNBJTIyZXhwb3J0JTIwZGVmYXVsdCUyMGZ1bmN0aW9uJTIwc3F1YXJlJTIwKCUyMHglMjApJTIwJTdCJTVDbiU1Q3RyZXR1cm4lMjB4JTIwKiUyMHglM0IlNUNuJTdEJTIyJTJDJTIyaXNFbnRyeSUyMiUzQWZhbHNlJTdEJTJDJTdCJTIybmFtZSUyMiUzQSUyMnNxdWFyZS5qcyUyMiUyQyUyMmNvZGUlMjIlM0ElMjJleHBvcnQlMjBkZWZhdWx0JTIwZnVuY3Rpb24lMjBzcXVhcmUlMjAoJTIweCUyMCklMjAlN0IlNUNuJTVDdHJldHVybiUyMHglMjAqJTIweCUzQiU1Q24lN0QlMjIlN0QlNUQlMkMlMjJvcHRpb25zJTIyJTNBJTdCJTIyZm9ybWF0JTIyJTNBJTIyZXMlMjIlMkMlMjJuYW1lJTIyJTNBJTIybXlCdW5kbGUlMjIlMkMlMjJhbWQlMjIlM0ElN0IlMjJpZCUyMiUzQSUyMiUyMiU3RCUyQyUyMmdsb2JhbHMlMjIlM0ElN0IlN0QlN0QlMkMlMjJleGFtcGxlJTIyJTNBbnVsbCU3RA==) as linked to from [this issue](https://github.com/rollup/plugins/issues/486#issuecomment-654416757) as a reference implementation.

_rollup.config.js_
```js
module.exports = {
  input: './src/index.js',
  output: {
    dir: './dist',
    entryFileNames: '[name].[hash].js',
    chunkFileNames: '[name].[hash].js'
  }
};
```

_index.js_
```js
import square from './square.js?foo=bar';

alert(square(10));
```

_Output_
```sh
IEUser@MSEDGEWIN10 MINGW64 ~/Workspace/rollup-plugin-json-windows (main)
$ npm run build

> rollup-plugin-json-windows@1.0.0 build C:\Users\IEUser\Workspace\rollup-plugin-json-windows
> npm run clean && rollup -c rollup.config.js


> rollup-plugin-json-windows@1.0.0 clean C:\Users\IEUser\Workspace\rollup-plugin-json-windows
> rimraf ./dist


./src/index.js → ./dist...
[!] Error: Could not resolve './square.js?foo=bar' from src\index.js
Error: Could not resolve './square.js?foo=bar' from src\index.js
    at error (C:\Users\IEUser\Workspace\rollup-plugin-json-windows\node_modules\rollup\dist\shared\rollup.js:7895:30)
    at ModuleLoader.handleResolveId (C:\Users\IEUser\Workspace\rollup-plugin-json-windows\node_modules\rollup\dist\shared\rollup.js:19570:24)
    at C:\Users\IEUser\Workspace\rollup-plugin-json-windows\node_modules\rollup\dist\shared\rollup.js:19526:22
    at async Promise.all (index 0)
    at async ModuleLoader.fetchStaticDependencies (C:\Users\IEUser\Workspace\rollup-plugin-json-windows\node_modules\rollup\dist\shared\rollup.js:19524:34)
    at async Promise.all (index 0)
    at async ModuleLoader.fetchModule (C:\Users\IEUser\Workspace\rollup-plugin-json-windows\node_modules\rollup\dist\shared\rollup.js:19500:9)
    at async Promise.all (index 0)
```

_**Edit**_

I thought this was a Windows only issue, but seems the same happens on macOS too?
```sh
% npm run build

> rollup-plugin-json-windows@1.0.0 build /Users/owenbuckley/Workspace/github/repos/rollup-plugin-json-windows
> npm run clean && rollup -c rollup.config.js


> rollup-plugin-json-windows@1.0.0 clean /Users/owenbuckley/Workspace/github/repos/rollup-plugin-json-windows
> rimraf ./dist


./src/index.js → ./dist...
[!] Error: Could not resolve './square.js?foo=bar' from src/index.js
Error: Could not resolve './square.js?foo=bar' from src/index.js
    at error (/Users/owenbuckley/Workspace/github/repos/rollup-plugin-json-windows/node_modules/rollup/dist/shared/rollup.js:7895:30)
    at ModuleLoader.handleResolveId (/Users/owenbuckley/Workspace/github/repos/rollup-plugin-json-windows/node_modules/rollup/dist/shared/rollup.js:19570:24)
    at /Users/owenbuckley/Workspace/github/repos/rollup-plugin-json-windows/node_modules/rollup/dist/shared/rollup.js:19526:22
    at async Promise.all (index 0)
    at async ModuleLoader.fetchStaticDependencies (/Users/owenbuckley/Workspace/github/repos/rollup-plugin-json-windows/node_modules/rollup/dist/shared/rollup.js:19524:34)
    at async Promise.all (index 0)
    at async ModuleLoader.fetchModule (/Users/owenbuckley/Workspace/github/repos/rollup-plugin-json-windows/node_modules/rollup/dist/shared/rollup.js:19500:9)
    at async Promise.all (index 0)
```

## Setup

While on a Windows machine or [VM](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/), do the following:

1. Clone this repo
1. Run `npm ci`
1. Run `npm run build` (or `npm start`)

## Observations
I noticed that if I removed the `./` before the paths, then it worked *
```js
import square from 'square.js?foo=bar';
import json from 'data.json?foo=bar';

alert(square(10));
alert(JSON.stringify(json));
```

* albeit with a warning on unresovled dependecies warning _only on Windows_.
```sh
> rollup-plugin-json-windows@1.0.0 build C:\Users\IEUser\Workspace\rollup-plugin-json-windows
> npm run clean && rollup -c rollup.config.js


> rollup-plugin-json-windows@1.0.0 clean C:\Users\IEUser\Workspace\rollup-plugin-json-windows
> rimraf ./dist


./src/index.js → ./dist...
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
square.js?foo=bar (imported by src\index.js)
data.json?foo=bar (imported by src\index.js)
```

And the _dist_ file contents were unbundled
```js
import square from 'square.js?foo=bar';
import json from 'data.json?foo=bar';


alert(square(10));
alert(JSON.stringify(json));
```