# CookRecipe (online cooking learning app)

This is an online cooking learning app where an user can search defferent type of cooking recipes and mark them favorite to watch latter, etc.

## Demo

- Login views

[Watch the Demo](https://res.cloudinary.com/dh4dcboea/video/upload/v1718025709/2024-06-10_18-43-56_krqxrc.mkv)

## Components Structure

- App.js -> Implementing react-routing to enabling navigation beetwen different routes. It holds the main logic of application for routing like Home, Favorite, About, Contact, NotFound.

- Home -> this is first interface of cook-recipe app it holds the search section, latest resipe section, filter by name seaction, etc.

- Header.js -> It holds menu list and logo of the app. user can navigate beetween different route by clicking menu item, etc.

- FavoriteItem.js -> It fetch the favorite item list from localStorage. if list has the items then it will render the recipeCards otherwise it renders no recipeView and also can search or filter the recipes, etc.

- About.js -> Display an amazing animation and about content.

- Contact.js -> Display an amazing animation and also an user can email by clicking email us button, etc.

- LatestRecipes.js -> Making api call and display the recipe cards using RecipeCard component and display Loader while fatching data from the server, etc.

- RecipeCard -> An Function component that accept recipe details as prop and render recipe-card.

- RecipeDetails -> It is a function component that access the key parameter from the url using Hook useParams and using this Id making fetching the recipe details from the server by making an API call, etc.

- FailureView.js -> Implementing failure view using bootstrap classes and grid system, etc.

- NoItemView.js -> Implementing NoItemView view using bootstrap classes and grid system, it displayed to the user if no search result is found.

- NotFound.js -> If the user try to access undefind path then app redirect to NotFound Route and display not found view, etc.

## About

Implemented CookRecipe application which is an online cooking learning app where an user can search defferent type of cooking recipes and mark them favorite to watch latter, etc.

## Demo

click on this link to watch the demo -> https://cookrecipe.ccbp.tech/

## Technologies Used

- React
- React Routing
- Local Storage
- React Hooks
- Rest API
- React Icon's
- uuid 
- Bootstrap
- CSS animations
- etc.

## Installation

install all the dependencies using 'npm install' run the application using 'npm start'
