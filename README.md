# A Simple Node REST Service

## Code structure
This code is organized following conventional JavaScript standards.

The project root directory contains project configuration files used by Git and NPM (such as .gitignore and package.json), as well as this README.md file which contains project information.

- **index.js** comtains the main() method, which is the execution start point for this application.
- **application.js** contains application runtime configuration.
- **/src** contains the JavaScript source code files, sub-grouped by architectural domain.
- ....**/src/data** contains objects and functions related to the persistence layer.
- ....**/src/routes** contains RESTful API operations and workflows related to the API view layer.
- ....**/src/service** contains objects and functions related to executing the business operations.
- **__test__** contains the application unit test suite and integration test suites.

Unit test source code files are named using the Jest file naming convention of `{object filename}.test.js`.
Integration test source code files are names using the naming convention of `{object filename}.integration.test.js`.

## Intalling the code
Clone this repository using the location specified by Git.

Before running the code for the first time, update the application dependencies by executing the command below from the command line at the applucation root.
>   npm install

## Testing the code
From a terminal window at the application root, execute the command below to run the unit test suite.
>   npm test

From a terminal window at the application root, execute the command below to run the integration test suite.
>   npm run test:integration

## Running the code
From a terminal window at the application root, execute the command below.
>   npm start

To run the application in developer mode, execute the command below from a terminal window at the application root.
>   npm run start:dev
