const {
  exec
} = require("child_process");
const path = require("path");
const runCommandCWD = require("battleship-utils");

// Function to run 'npx lerna init' in the current directory
function runLernaInit() {
  runCommandCWD("npx lerna init");
}
module.exports = runLernaInit;
// Call the function
runLernaInit();