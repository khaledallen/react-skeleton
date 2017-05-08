var React = require('react');
var ReactDOM = require('react-dom'); //react-dom works to show things on the screen
var List = require('./components/List.jsx');

ReactDOM.render(<List />, document.getElementById('ingredients'));  //this tells the DOM to insert the List component into the DOM element ID called ingredients
