// -------------------------
// module dependencies
const application = require("./application");

// -------------------------
// module functions
const PORT = 8000;

// execution starts here
if (require.main === module) {
  main();
}

// -------------------------
// module functions

// main() is the starting point for this application
function main() {
  console.log("The application is starting up...");

  application.listen(PORT, () => {
    console.log(`     Application listening on port ${PORT}.`);
  });
}
