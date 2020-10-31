# nclouds_react_app

Web-application built with Create React App and Ionic.

## Technology:

UI: React + Redux(thunk), Ionic, Immer, Reselect, Lodash, ES6, SASS

Unit-testing: Jest, Redux-mock-store

API: FIREBASE AUTH, REST

Backend: Existing API service: http://countryapi.gear.host/v1/

#How to get it running?

    1. npm install (recommended > v12)
    2. Inside the root folder, you can run some built-in commands:

    ### npm start or yarn start
    Runs the app in development mode.
    Open http://localhost:3000 to view it in the browser.
    !! In order to get it done you have to start the proxy server which is needed for the existing Country API.
    ###Runs in parallel: npm run dev-server


    ### npm test or yarn test
    Runs the test watcher in an interactive mode.

    ### npm run test-coverage or yarn test-coverage
    Generates an html report(path: "[root_folder]/coverage/lcov-report/index.html") to the coverage folder.


    ### npm run build or yarn build
    Builds the app for production to the build folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.
