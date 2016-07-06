var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavItem = React.createClass({
    getInitialState : function(){
       return { hover : false};
    },
    mouseOver : function(){
        this.setState({ hover : true});
    },
    mouseOver : function(){
        this.setState({ hover : false});
    },
    render : function(){
       return(
               <li> <Link style={this.props.lstyle} to = {this.props.href}>{this.props.title} </Link></li> 
                /*DON'T Make a separate div here. Hinders with BS logic. Also, use Radium for hover effect*/
       );
   } 
});

module.exports = NavItem;