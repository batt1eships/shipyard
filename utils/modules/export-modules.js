import fs = from "fs"
import path = from "path"

export function exportModules(params) {
  // Path to the directory containing the modules
  const modulesPath = path.join(__dirname, "");

  // Get all files in the modules directory
  const files = fs.readdirSync(modulesPath);

  // Create an object to hold the exports
  const exports = {};

  // Iterate over each file and require it
  files.forEach((file) => {
    // Skip if it's not a JavaScript file
    if (path.extname(file) !== ".js") return;

    // Get the file name without extension
    const moduleName = path.basename(file, ".js");

    // Require the module and add it to the exports object
    exports[moduleName] = require(path.join(modulesPath, file));
  });

  // Export all modules
  //   module.exports = exports;
  // Export all modules
  return exports;
}
