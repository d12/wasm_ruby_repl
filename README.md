## WASM Ruby REPL

Trying to write a Ruby REPL w/ WebAssembly. Mostly just playing around.

Current state: I can pass in arbitrary Ruby code from JS to a Ruby VM and execute it without having to re-compile the c++/ruby wasm.

Next step: A UI?

## Compiling

`rake build` Will use source in src/ to generate a working web application in build/. Because of CORS, you have to serve the directory over a web server instead of just opening the HTML file directly in Chrome.

## Tests

heh

## Dependencies

See https://webassembly.org/getting-started/developers-guide/
