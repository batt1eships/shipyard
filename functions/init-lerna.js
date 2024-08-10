import { exec } from "child_process";
import path from "path";

// Function to run 'npx lerna init' in the current directory
export function runLernaInit() {
  runCommandCWD("npx lerna init");
}
