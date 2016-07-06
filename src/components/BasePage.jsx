var React = require('react');
var NavBar = require('./nav/navbar.jsx');
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