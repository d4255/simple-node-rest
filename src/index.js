// -------------------------
// module dependencies
const application = require('./application');

// execution starts here
if (require.main === module) {
    main();
}

// -------------------------
// module functions

// main() is the starting point for this application
function main() {
    console.log('The application is starting up...');

    application.listen(8000, () => {
        console.log('     Application listening on port 8000.');
    });
}
