const {
  exec
} = require("child_process");
const path = require("path");

// Function to run 'npx lerna init' in the current directory
function runCommandCWD(command) {
  // Get the current directory
  const currentDir = process.cwd();

  // Execute 'npx lerna init' in the current directory
  exec(command, {
    cwd: currentDir
  }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
module.exports = runCommandCWD;

// Call the function
runCommandCWD();