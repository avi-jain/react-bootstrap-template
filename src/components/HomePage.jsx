var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link; //Use this for linking to other pages, not a <a> tag

var HomePage = React.createClass({
    
    render : function(){
       return(
            <div>
               <h1> Home Page </h1>
               <ul>
                   <li><Link to= 'product/123'>Link 1 </Link></li>
                   <li><Link to= 'product/124'>Link 2 </Link></li>
               </ul>
            </div>
       );
   } 
});

module.exports = HomePage;