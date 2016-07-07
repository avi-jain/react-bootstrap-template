var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link; //Use this for linking to other pages, not a <a> tag

var FullPage = require('react-fullpage');
var SectionsContainer = FullPage.SectionsContainer;
var Section = FullPage.Section;


var HomePage = React.createClass({
    
    render : function(){
        let options = {
                        className:            'SectionContainer', // the class name for the section container 
                        delay:                1000,
                        activeClass:          'active',    
                        scrollBar:            false, // use the browser default scrollbar 
                        sectionClassName:     'Section' // the section class name 
                      };
        return(
           <div>
 
                    <SectionsContainer className="container" {...options}>
                        <Section>
                            <div>
                               <h1> Home Page </h1>
                               <ul>
                                   <li><Link to= 'product/123'>Link 1 </Link></li>
                                   <li><Link to= 'product/124'>Link 2 </Link></li>
                               </ul>
                            </div>
                        </Section>
                        <Section>About</Section>
                        <Section>Stuff I Do</Section>
                    </SectionsContainer>
               
           </div>
       );
   } 
});

module.exports = HomePage;