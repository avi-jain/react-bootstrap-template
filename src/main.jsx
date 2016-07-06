var React = require("react");
var ReactDom = require("react-dom");
var NavBar = require("./components/nav/navbar.jsx");
var Routes = require("./routes.jsx");


ReactDom.render(Routes,document.getElementById('content'));