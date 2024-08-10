export const createtypescriptproject = () => {
  // Usage
  const zipUrl = "https://github.com/username/repository/archive/refs/heads/main.zip"; // Replace with your ZIP URL
  const outputDir = "./extracted"; // Directory to save the extracted files
  downloadAndUnzip(zipUrl, outputDir);
};
