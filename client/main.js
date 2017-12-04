import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';


Tracker.autorun(() => {
    console.log("Players List: " ,  Players.find().fetch());
});

const players = [
    {
        _id: '1',
        name: 'Lauren',
        score: 30
    },
    {
        _id: '2',
        name: 'Max',
        score: 30
    }
        ]
 const renderPlayers = function (playersList) {
     return playersList.map((player) => {
         return <p key = {player._id}> {player.name} has {player.score} point(s).  </p>;
     });
 };
Meteor.startup( function () {

    Tracker.autorun(() =>  {
        const players = Players.find().fetch();
        let name = "Waqar ";
        let title = "Score Keep";
        let jsx = (
            <div>
            <h1> {title}</h1>
            <p> Hello {name} </p>
        <p> this is my second p. </p>
        {renderPlayers(players)}
    </div>

    );
        ReactDOM.render(jsx, document.getElementById('root'));
    });
    Players.insert({
        name: "ASAD",
        score: 1
    });


});