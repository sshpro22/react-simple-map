This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Neighborhood Map Project

## Project Overview

I created a single page application featuring a map showing some nice restaurants in the University District, Seattle, a Neighborhood I used to live in. I added functionality to this map including highlighted locations, third-party data about those locations and various ways to browse the content.

## Specifications

The purpose of this project was to build a single page map application using React and Google Maps API, and to integrate a third-party data API and make the app responsive, accessible and usable offline.

## Installing

To run the project in development mode in your local machine:

* Download or clone the repository in your computer:
```
$ git clone https://github.com/dimikara/React-Neighborhood-Map-3.git
```

* Navigate to the repository directory in your terminal

* Run the following code to install the development dependencies:
```
npm install
```
* start the development server with
```
npm start
```
* open [http://localhost:3000](http://localhost:3000) to view the site in the browser.

To run the project in the production mode:
* Run:
```
npm run build
```
This builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Tools & dependencies

* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* [axios](https://github.com/axios/axios), a promise based HTTP client for the browser and node.js.
* [react-burger-menu](http://negomi.github.io/react-burger-menu/), an off-canvas sidebar React component with a collection of effects and styles using CSS transitions and SVG path animations.
* [Escape RegExp](https://www.npmjs.com/package/escape-string-regexp) special characters.
* [Google Maps API](https://cloud.google.com/maps-platform/) for the map.
* [FOURSQUARE Places API](https://developer.foursquare.com/places-apifor), for information about the restaurants.
