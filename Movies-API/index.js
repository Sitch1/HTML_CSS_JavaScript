const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

// Hilfsfunktion
function readFile() {
    const data = fs.readFileSync("movies.json", "utf-8");
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync("movies.json", JSON.stringify(data, null, 2));
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
            id: movie.length + 1,
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

app.put("/movie/:id", (req, res) => {
    const id = req.params.id;
    const movie = readFile();
    const newMovie = req.body.art;

    const foundMovie = movie.find(movie => movie.id == id)
    foundMovie.movie = newMovie
    res.json(foundMovie)
    writeFile(movie)
});

app.delete("/movie/:id", (req, res) => {
    const id = req.params.id;
    const movie = readFile();
    const index = movie.findIndex(movie => movie.id == id);
    const deleteMovie = movie.splice(index, 1)
    writeFile(movie)
    res.json("successfully deleted: " + deleteMovie[0].Title)
});



app.listen(5005);  