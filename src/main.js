function exec_ruby(ruby_code) {
  ascii_array = [];
  for (var i = 0; i < ruby_code.length; i ++)
    ascii_array.push(ruby_code[i].charCodeAt(0));

  //allocate Int32Array and fill with ascii data
  const typedArray = new Int32Array(ascii_array.length)
  for (let i=0; i<ascii_array.length; i++) {
    typedArray[i] = ascii_array[i]
  }

  var len = typedArray.length;
  var bytes_per_element = typedArray.BYTES_PER_ELEMENT;   // 4 bytes each element

  //allocate memory on wasm heap
  ptr = Module._malloc(typedArray.length * typedArray.BYTES_PER_ELEMENT)
  Module.HEAP32.set(typedArray, ptr / typedArray.BYTES_PER_ELEMENT)

  //call wasm func
  var result = Module._ruby_exec(ptr, typedArray.length)
}

function runCode(){
  text = document.getElementById("code").value
  exec_ruby(text);
}

document.onload = function(){
  button = document.getElementById("button")
}
