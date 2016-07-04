var React = require('react');

var NavItem = React.createClass({
   render : function(){
       return(
               <li> <a href = {this.props.href}>{this.props.title} </a></li> /*DON'T Make a separate div here. Hinders with BS logic*/
       );
   } 
});

module.exports = NavItem;