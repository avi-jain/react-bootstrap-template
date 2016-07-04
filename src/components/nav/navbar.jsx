var React = require('react');
var NavItem = require('./navbar-item.jsx');

var NavBar = React.createClass({
   
  
    render : function(){
        var createNavItem = function(item,index){
            return(<NavItem key={item.title + index} title={item.title} href={item.href} />);
        };
        var navStyle ={
            
        }
        var titleStyle ={
            
        }
        if(this.props.bgColor){
            navStyle.background = this.props.bgColor;
        }
        if(this.props.linkColor){
            linkStyle.background = this.props.linkColor;
        }
        return(
           <div>
                <nav className = "navbar navbar-default" style={navStyle}>
                {/* .container-fluid was here. What's this for ? */}
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href = "#">Brand Name</a>
                     </div>
                     {/*Put the links that can be collapsed*/}
                     <div className = "collapse navbar-collapse" id = "nav-collapse">
                        <ul className="nav navbar-nav">{ this.props.navData.map(createNavItem) }</ul>
                     </div>
                    
                </nav>
            </div>
       );
   } 
});

module.exports = NavBar;