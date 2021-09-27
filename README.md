## A simple News App for searching news.

This project is built with [Create React App](https://github.com/facebook/create-react-app) and [Material-UI](https://github.com/mui-org/material-ui) and [newsapi.org](https://newsapi.org/) as a news source.





### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Clone the repo

Run `git clone https://github.com/iftekharriyad/news-app.git` to clone the repo.

#### Install all the dependencies

Run `yarn install` or `npm install` to intall all the dependencies.


#### Get an Newsapi.org API key

This app uses Newsapi.org API for getting all the news. You need an API key which you can get from [here](https://newsapi.org/) or you can use your existing one if you have any.
Then create an `.env` file at the root of the project. Add `REACT_APP_NEWS_ORG_API_KEY = YOUR_KEY_HERE_IN_QUOTES` in the file and save.

Note: You should put your API key in place of `YOUR_KEY_HERE_IN_QUOTES` in the `.env` file

#### Start the app
Run `yarn start` to start the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

#### For testing the app
`yarn test` launches the test runner in the interactive watch mode.
See the section about running tests for more information.

#### Build the app for production
`yarn build` builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

