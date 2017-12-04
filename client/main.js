import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup( function () {
    let name = "Waqar "
    let jsx = <p> This is from main by {name}. </p>;
    ReactDOM.render(jsx, document.getElementById('root'));
});