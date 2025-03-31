const express = require("express");
const app = express();

let giveMeAJoke = require('give-me-a-joke');

let generateName = require('sillyname');



app.get("/", (req, res) => {
    res.send("Willkommen bei meiner eigenen API!");
});

app.get("/data", (req, res) => {
    res.json([
        { id: 1, name: "Max" },
        { id: 2, name: "Lena" }
    ]);
});


app.get("/randomname", (req, res) => {
    let sillyName = generateName();
    res.send(sillyName)

});

app.get("/joke", (req, res) => {
    giveMeAJoke.getRandomDadJoke(function (joke) {
        res.send(joke);
    });
});



app.listen(3001, () => {
    console.log("Server läuft auf http://localhost:3001&quot;");
});
