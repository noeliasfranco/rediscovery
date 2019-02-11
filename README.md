# Rediscovery Test

## Installation

To install please follow these steps:

1. Clone the repository `git clone git@github.com:noeliasfranco/rediscovery.git` 
2. cd into /rediscovery
3. Run `npm install` 
4. Copy `config/default.json` file and rename it to *development.json*. Set your configuration values.

## Tech Stack

### Backend
- Node
- Express

### Frontend
- React
- Redux 
- Redux Router
- Redux Form

### Testing
- Mocha
- Expect 
- Enzyme
- jsdom

### Javascript version
- ECMA2015/ES6

### Tools
- Webpack

### UI
- Sass
- MaterialUI

## Available Commands

### `npm start` ###
With this command you can run the app on `localhost:3000`

### `npm test` ###
With this command you can run all the suite of testing of the app. For testing, we are using Enzyme+Jest.
Test files has to contains *.test.js extension

### `npm run lint -- --watch` ###
With this command you can run the eslint test and watch for any changes you are doing on the project

### `npm run build` ###
This command is separated into two pieces:
- `npm run build:server`: generates the bundle for the server under ./api folder
- `npm run build:client`: generates the bundle for all the frontend application included inside the ./app folder

### `npx styleguidist server` ###
With this command you can run a local server with all the components documentation. 
Docs will be available on `http://localhost:6060/`
