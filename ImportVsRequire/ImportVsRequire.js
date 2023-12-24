// Difference between import and require

// Synchronous vs. Asynchronous:
// require is synchronous and loads modules at runtime.
// import is asynchronous and is resolved at the module initialization time.

// Dynamic vs. Static:
// require is dynamic. It can be used conditionally within functions or loops.
// import is static. It must be used at the top level of a module and can't be conditionally applied.

// Named Imports:
// import supports named imports, allowing you to selectively import only the pieces you need.
// CommonJS (require) generally brings in the entire module, and you access its properties/methods through the assigned variable.

// Default Exports:
// require typically deals with the default export of a module directly.
// With import, you can use the import myModule from 'my-module'; syntax for default exports.

// Q2
// Use a Supported Node.js Version
// Specify File Extension
// Specify Package.json Configuration -add type field with the value module
// Use Absolute Paths

// CommonJS
// Command-line API

function exportFunc() {
    console.log("this function is being exported");
}
function exportFunc2() {
    console.log("this function is being exported");
}
function exportFunc3() {
    return "this function is being exported";
}

module.exports = { exportFunc, exportFunc2, exportFunc3 };

import fs from "fs";
fs.writeFileSync("new.txt", exportFunc3);
