import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Courousel from './Courousel';
import Card from './Card';
import DigitalClock from './DigitalClock';
import './index.css';
const root = document.getElementById('root');
const heading={
  borderBottom: '2px solid #000',
  padding: '0.5em 1em',
  display: 'flex',
  justifyContent: 'space-between'
}
ReactDOM.render(
  <>
  <header className="site-header" style={heading}>
            <div className="site-identity">
                <h1><a href="./">CodeWith Nikhil</a></h1>
            </div>
            <nav className="site-navigation">
                <ul className="nav">
                    <li><a href="./">Home</a></li>
                    <li><a href="./">About</a></li>
                    <li><a href="./">Blog</a></li>
                    <li><a href="./">Contact</a></li>
                </ul>
            </nav>        
  </header>
  <DigitalClock/>
 {/* <App/> */}
  {/*<Courousel/>*/} 
   <Card name="HTML" content="The HyperText Markup Language or HTML is the standard markup language for 
   documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting 
   languages such as JavaScript.HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages.
   Inclusion of CSS defines the look and layout of content."/>
  <Card name="CSS" content="CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.
  CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.This separation can improve content accessibility;
   provide more flexibility and control in the specification of presentation characteristics;"/>
  <Card name="JS" content="JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. 
  It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional,
   and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)." />
  </>
  ,root
);

