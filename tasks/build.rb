require "fileutils"

# Start by compiling the c++ into wasm with the Javascript harness
`emcc ./src/main.cpp -I ../mruby/include ../mruby/build/emscripten/lib/libmruby.a -Os -s WASM=1 -s "EXPORTED_FUNCTIONS=['_malloc']" -o ./build/ruby_exec.js -std=c++11  -s ASSERTIONS=1`

# Append src/main.js after the generated JS
main_js = File.read("src/main.js")
File.open("build/ruby_exec.js", "a") { |f|
  f.puts main_js
}

# Copy index.html into build/
FileUtils.cp("src/index.html", "build/index.html")
