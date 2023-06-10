//GOAL - Create a ranking script that will take the gameData and output a new calculated rank for each player to the console.

const playerList = require('./playerList.json');
const gameData = require('./gameData.json');


function getRank(p) {
    let game = gameData.games[0]

    let players = game.players

    for(let i = 0; i < players.length; i++) {
        console.log(`Name ${players[i].name}`)
        console.log(`Rank: ${players[i].rank}`)
        let placementArr = [

        ]

        //Number check, if > else
        //p1Place > p2Place { p1 = Win p2 = Loss }
        //p1Place > p3Place { p1 = Win p2 = Loss}
        //p3Place > p2Place ( p3 = Win p2 = Loss)
        //give each 1pt or 0 for win or loss, then sort from there?
        //p1 = 2pts p2 = 0pts p3 = 1pts
    }
    
}

getRank()