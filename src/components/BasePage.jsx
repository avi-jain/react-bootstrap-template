var React = require('react');
var NavBar = require('./nav/navbar.jsx');

var  navLinks = [
    {
        title : "Home",
        href : "/"
    },
    {
        title : "About",
        href : "#"
    },
    {
        title : "Stuff I do",
        href : "#"
    }
    
];
var BasePage = React.createClass({
    
    render : function(){
       return(
            <div>
                <NavBar bgColor = "white" linkColor= "darkturquoise" navData={navLinks} />
                {this.props.children}
            </div>
       );
   } 
});

module.exports = BasePage;