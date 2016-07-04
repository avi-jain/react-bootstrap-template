var React = require("react");
var ReactDom = require("react-dom");
var NavBar = require("./components/nav/navbar.jsx");

var  navLinks = [
    {
        title : "Link1",
        href : "#"
    },
    {
        title : "Link2",
        href : "#"
    },
    {
        title : "Link3",
        href : "#"
    }
    
];

ReactDom.render(<NavBar bgColor = "white" linkColor= "darkturquoise" navData={navLinks} />,document.getElementById('content'));