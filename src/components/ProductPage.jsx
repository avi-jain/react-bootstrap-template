var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link; //Use this for linking to other pages, not a <a> tag

var ProductPage = React.createClass({
    getInitialState : function(){
      return({pID : ""});
    },
    componentDidMount : function(){
      this.setState({pID : this.props.params.productID}); // Dynamic contents are passed are params by ReactRouter
    },
    componentWillReceiveProps : function(nextProps){
        this.setState({pID: nextProps.params.productID}); // because didMount is only called once, and we're changing the                                                   //initial props 
    },
    render : function(){
        if(!this.state.pID){
            return null;
        }
        return(
            <div>
               <h1> Hi this is {this.state.pID} </h1>
            </div>
       );
   } 
});

module.exports = ProductPage;