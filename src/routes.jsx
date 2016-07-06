var React = require('react');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;  // Remember it's Route that needs to be imported
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require("C:/Users/Avi Jain/Desktop/product-shop-app/node_modules/react-router/node_modules/history/lib/createHashHistory.js"); // Shorten this shit

var History = new CreateHistory({
    queryKey: false
}); //For getting rid of the ugly hash

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');


var Routes = (
    <Router history = {History}>
        <Route path ='/' component= {BasePage}>
            <IndexRoute component = {HomePage}></IndexRoute> {/*Loads up as the default child of / */}
            <Route path = 'product/:productID' component={ProductPage} /> {/*User inputs a unique (:productID)*/}
        </Route>
    </Router>
);

module.exports = Routes;
