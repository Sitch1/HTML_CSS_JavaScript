const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());
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
    try {
        const movie = readFile();
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: `Inernal Server Error: ${err}` });
    }
});

app.get("/movie/search", (req, res) => {
    const { Title } = req.query;
    if (!Title) {
        return res.status(400).json({ error: "Title query parameter is required!" });
    }
    const movie = readFile();
    const result = movie.find(m => m.Title.toLowerCase().includes(Title.toLowerCase()));
    console.log(result);
    if (!result) {
        return res.status(404).json({ error: "Movie not found!" });
    }
    res.json(result);

});

app.post("/movie", (req, res) => {
    try {
        const movie = readFile();
        const { Title, Year } = req.body

        if (!(Title && Year)) {
            return res.status(400).json({ error: "Title und Year sind Pflichtfelder" });
        }

        const nameTaken = movie.find((movie) => movie.Title == Title && movie.Year)
        if (nameTaken) {
            return res.status(400).json({ error: "Es gibt bereits ein Movie mit diesem Title und Year!" });
        }

        if (Title.length < 3) {
            return res.status(400).json({ error: "Title muss mind. 3 Buchtsaben beinhalten!" });
        }

        const newMovie = {
            id: movie.length + 1,
            Title: Title,
            Year: Year
        }
        movie.push(newMovie)
        writeFile(movie)
        res.status(201).json(newMovie)

    } catch (err) {
        res.status(500).json({ error: "Internal Server error!" })
    }

})

app.put("/movie/:id", (req, res) => {
    try {
        const id = req.params.id;
        const movie = readFile();
        const newMovie = req.body.Title;

        const foundMovie = movie.find(movie => movie.id == id)
        foundMovie.Title = newMovie
        res.json(foundMovie)
        writeFile(movie)
    } catch (err) {
        res.status(500).json({ error: "Internal Server error!" })
    }
});

app.delete("/movie/:id", (req, res) => {
    try {
        let id = req.params.id;
        if (isNaN(id)) {
            return res.status(400).json({ error: "ID muss eine Zahl sein!" });
        }
        id = Number(id)
        const movies = readFile();
        console.log(`id: ${typeof (id)}`)
        const index = movies.findIndex(movie => movie.id === id)

        if (index === -1) {
            return res.status(404).json({ error: "Movie existiert nicht!" });
        }
        const entferntesMovie = movies.splice(index, 1)
        writeFile(movies)
        res.json("erfolgreich gelöscht: " + entferntesMovie[0].Title)
    } catch (err) {
        res.status(500).json({ error: "Internal Server error!" })
    }

});

app.get("/search", (req, res) => {
    const { id, Title, Year } = req.query;
    let movies = readFile();
    if (id) {
        movies = movies.filter((movie) => movie.id == id);
    }
    if (Title) {
        movies = movies.filter((movie) => movie.Title.toLowerCase().includes(Title.toLowerCase()));
    }
    if (Year) {
        movies = movies.filter((movie) => movie.Year.toLowerCase() == Year.toLowerCase());
    }
    res.json(movies);

});



app.listen(5005);  