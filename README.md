# rollup-plugin-json-windows

A repro testing repo for Windows and Rollup (+ [**@rollup/plugin-json**](https://github.com/rollup/plugins/tree/master/packages/json)) and using query strings in `import` paths.  Following [this example] as linked to from [this issue]() as a reference implementation.

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

_index.js
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

## Setup
While on a Windows machine or [VM](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/), do the following:

1. Clone this repo
1. Run `npm ci`
1. Run `npm run build` (or `npm start`)

Compared to running the same steps on macOS (and presumably any *nix based environment), where everything runs as expected.
```sh
TBD
```