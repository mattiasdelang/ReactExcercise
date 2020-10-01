# React-Excercise

## Step 0 - Setup

Install all dependencies using `npm install`. All dependencies are alreay included in the `package.json` file.

The `app.css` file is already imported in the app.js component. This file contains some css classes that can be used on the components. There is no need for inline styling.

## Step 1 - Main View
* Add a Main view
* Render Main view in App
* Fetch pokemon from api
  * Make use of `useState()` and `useEffect()` 
  * Use axios to fetch the data
  * http://localhost:1337/pokemon
* Render the pokemon images in the main view

## Step 2 - Details View
* Add a Details View
* Add a Router to `app.js`
  * Check the react-router-dom documentation https://reactrouter.com/web/guides/quick-start
  * Add a a route for both views
    * Use `/` for the main view
    * Use `/:id` for the details view
  * Add a redirect for all other paths
* Use Link to redirect to the Details view when a sprite is clicked
  * Create a MainSprite component

## Step 3 - Details Card
* Get the id from the route params
  * Use the useParams() hook from react-router-dom
  * Fetch pokemon details from api
    * http://localhost:1337/pokemon/${id}
  * Create a DetailsCard Component
    * Show Pokemon details {sprite, id, name, info}
    * You can use `className='detailsCard'` for the cardContainer

## Step 4 - Header
* Create a Header component
  * Place a Home button that redirects to the main view
  * Use `className='header'` for the header container and `className='text'` for the home link

## Step 5 - Custom Hook
* Replace the getPokemon and getPokemon details useEffects by a custom hook
  * https://reactjs.org/docs/hooks-custom.html
  * Create HttpHooks.js file
  * Create a useGet function that:
    *  accepts a path parameter
    *  returns a {data, error, loading} object
*  Implement your newly made useGet hook in the details and main page
   *  use conditional rendering to show when the request is loading
   *  use conditional rendering to show when the request resulted in an error

## Step 6 - Back/Next
* Add a back/next button to the detailsview
  * the buttons are always visible unless:
  * hide/disable the back button when the id is 1
  * hide/disable the forward button when the id is 151
  * Use `className='detailsContainer'` for the details container and `className='detailsNavigation'` for the button container

## Step 7 - Higher Order Component
* Create a set/remove favorite button
  * When pressed, send a PATCH request
    * http://localhost:1337/pokemon/${id}
    * request body looks like `JSON.stringify({favorite:BOOLEAN})`
    * add `'Content-Type': 'application/json'` to the request's header
* Add property to the Details component that tracks the state of favorite
  * Dont forget to update the favorite property when you go back/fwd
  * Pass the favorite property to right components
* Create a higher order component withFavorite
  * https://reactjs.org/docs/higher-order-components.html
  * The HOC adds the favorite className to the component if the favorite property is true
  * Use the HOC on the detail Card and the pokemon List

