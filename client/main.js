import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';


Tracker.autorun(() => {
    console.log("Players List: " ,  Players.find().fetch());
});

// const players = [
//     {
//         _id: '1',
//         name: 'Lauren',
//         score: 30
//     },
//     {
//         _id: '2',
//         name: 'Max',
//         score: 30
//     }
//         ]
 const renderPlayers = function (playersList) {
     return playersList.map((player) => {
         return <p key = {player._id}> {player.name} has {player.score} point(s).  </p>;
     });
 };
const handleSubmit = function (e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName)
    {
     e.target.playerName.value = ""
        Players.insert({
            name: playerName,
            score: 0
        });
    }

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
        <form onSubmit= {handleSubmit}>
         <input type = "text" name = "playerName" placeholder="Player name" />
            <button> Add Player </button>
        </form>
    </div>

    );
        ReactDOM.render(jsx, document.getElementById('root'));
    });



});