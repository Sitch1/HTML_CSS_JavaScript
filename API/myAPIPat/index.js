const express = require("express");
const app = express();


//CRUD
// C = Create -> Erstellen ->> Post
// R = Read -> Lesen ->> GET
// U = Update -> Daten updaten ->> PUT
// D = Delete -> Löschen ->> DELETE

app.get("/", (req, res) => {
    res.send("Hauptseite von Pat's");
});

app.get("/pat", (req, res) => {
    res.send(pat);
});

app.get("/id/:id", (req, res) => {
    const id = req.params.id;
    const result = pat.filter((pat) => pat.id == id);
    // res.send("Du hast das Tier mit folgender ID gesuch: " + req.params.id);
    res.json(result);
});

app.get("/pat/search", (req, res) => {
    const art = req.query.art;
    const result = pat.filter((pat) => pat.art == art);
    res.json(result);
});

app.get("/pat/rasse/search", (req, res) => {
    const rasse = req.query.rasse;
    const result = rasse.filter((pat) => pat.rasse == rasse);
    res.json(result);
});



const pat = [
    { id: 1, name: "Toni", art: "Hund", rasse: "OEB-Amstaff", geschlecht: "Weiblich", alter: "8 Jahre" },
    { id: 2, name: "Nova", art: "Hund", rasse: "chihuahua", geschlecht: "Mänlich", alter: "10 Jahre" },
    { id: 3, name: "Yoshi", art: "Vogel", rasse: "Wellensittich", geschlecht: "Mänlich", alter: "3 Jahre" },
    { id: 4, name: "Tweety", art: "Vogel", rasse: "Wellensittich", geschlecht: "Weiblich", alter: "3 Jahre" },
];


app.listen(3002);