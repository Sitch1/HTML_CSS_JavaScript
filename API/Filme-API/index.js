const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

function readFile() {
    const data = fs.readFileSync("filme.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("filme.json", JSON.stringify(data, null, 2));
}

app.get("/filme", (req, res) => {
    const filme = readFile();
    res.json(filme);
});

app.post("/filme", (req, res) => {
    const filme = readFile();
    const { Titel, Jahr } = req.body

    if (Titel && Jahr) {
        const newFilm = {
            id: filme.length + 1,
            Titel: Titel,
            Jahr: Jahr
        }
        filme.push(newFilm)
        writeFile(filme)
        res.status(201).json(newFilm)
    }
    else {
        res.send("Daten unvollständig")
    }
});



app.listen(5005);