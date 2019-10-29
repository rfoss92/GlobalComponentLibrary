var React = require('react');

var TodaysDate = function TodaysDate() {
    return React.createElement(
      "div",
      null,
      "Today's date is " + Date()
    );
  };
  
module.exports = TodaysDate;