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

app.get("/pet", (req, res) => {
    res.send(pet);
});

app.get("/id/:id", (req, res) => {
    const id = req.params.id;
    const result = pet.filter((pet) => pet.id == id);
    // res.send("Du hast das Tier mit folgender ID gesucht: " + req.params.id);
    res.json(result);
});

app.get("/pet/search", (req, res) => {
    const art = req.query.art;
    const result = pat.filter((pet) => pet.art == art);
    res.json(result);
});

app.get("/pet/rasse/search", (req, res) => {
    const rasse = req.query.rasse;
    const result = rasse.filter((pet) => pet.rasse == rasse);
    res.json(result);
});



const pet = [
    { id: 1, name: "Toni", art: "Hund", rasse: "OEB-Amstaff", geschlecht: "Weiblich", alter: "8 Jahre" },
    { id: 2, name: "Nova", art: "Hund", rasse: "chihuahua", geschlecht: "Mänlich", alter: "10 Jahre" },
    { id: 3, name: "Yoshi", art: "Vogel", rasse: "Wellensittich", geschlecht: "Mänlich", alter: "3 Jahre" },
    { id: 4, name: "Tweety", art: "Vogel", rasse: "Wellensittich", geschlecht: "Weiblich", alter: "3 Jahre" },
];

app.use(express.json()); // Middleware -> Ermöglicht, dass ein Body über den Request mitgeschickt wird.

app.post("/pet", (req, res) => {
    const { name, art, rasse, geschlecht, alter } = req.body;
    const newPet = {
        id: pat.length + 1,
        name: name,
        art: art,
        rasse: rasse,
        geschlecht: geschlecht,
        alter: alter,
    };
    pat.push(newPet);

    res.json(pet);
});

app.put("/pet/:id", (req, res) => {
    const id = req.params.id
    const newRasse = req.body.rasse

    const foundPet = pet.find((pet) => pet.id == id)
    foundPet.rasse = newRasse
    res.json(foundPet)
});

app.delete("/pet/:id", (req, res) => {
    const id = req.params.id
    const index = pet.findIndex(pet => pet.id == id)
    pet.splice(index, 1)

    res.send(pet)
});


app.listen(3002);