import _ from 'lodash';
window.$ = window.jQuery = require("jquery");

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    $("body").addClass("something");
    
    return element;
    
  }
  
  document.body.appendChild(component());