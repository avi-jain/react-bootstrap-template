var React = require('react');

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
               <li> <a style={this.props.lstyle} href = {this.props.href}>{this.props.title} </a></li> 
                /*DON'T Make a separate div here. Hinders with BS logic. Also, use Radium for hover effect*/
       );
   } 
});

module.exports = NavItem;