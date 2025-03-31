const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

function readFile() {
    const data = fs.readFileSync("movie.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("movie.json", JSON.stringify(data, null, 2));
}

app.get("/movie", (req, res) => {
    const movie = readFile();
    res.json(movie);
});

app.post("/movie", (req, res) => {
    const movie = readFile();
    const { Title, Year } = req.body

    if (Title && Year) {
        const newMovie = {
            id: filme.length + 1,
            Title: Title,
            Year: Year
        }
        movie.push(newMovie)
        writeFile(movie)
        res.status(201).json(newMovie)
    }
    else {
        res.send("Daten unvollständig")
    }
});



app.listen(5005);   