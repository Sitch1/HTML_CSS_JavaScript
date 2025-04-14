const express = require("express") // Importiert Express.js, ein Webframework für Node.js
const app = express() // Erstellt eine neue Express-App
const sqlite3 = require("sqlite3") // Importiert das SQLite3-Modul

const db = new sqlite3.Database(":memory:") // Erstellt eine SQLite-Datenbank im Arbeitsspeicher (temporär)

db.serialize(() => { // Führt alle Datenbankbefehle in Reihenfolge aus

    db.run(`CREATE TABLE plants ( // Erstellt die Tabelle 'plant' mit den folgenden Spalten
        id INTEGER PRIMARY KEY, // Eindeutige ID für jede Pflanze
        plant_name VARCHAR(80), // Pflanzenname (z. B. "Rose")
        species VARCHAR(40), // Spezies (z. B. "Rosa")
        family VARCHAR(30), // Familie (z. B. "Rosaceae")
        origin VARCHAR(50), // Herkunft (z. B. "Asien")
        growth_form VARCHAR(60) // Wuchsform (z. B. "Busch", "Kletterpflanze")
        );`)

    selectAllPlantsQuery = `SELECT * FROM plants` // ❌ FEHLER: falscher Tabellenname ("pflanzen" statt "plant")

    db.all(selectAllPlantsQuery, (err, rows) => { // Führt eine SELECT-Abfrage aus und gibt alle Pflanzen zurück
        if (err) {
            console.log(err) // Gibt den Fehler aus, wenn einer auftritt
        } else {
            console.log(rows) // Gibt die gefundenen Zeilen aus
        }
    })

    process.on("exit", () => { // Beim Beenden des Programms...
        db.close() // ... wird die Datenbankverbindung geschlossen
    })
})

app.use(express.json()) // Aktiviert JSON-Parsing für eingehende HTTP-Requests

app.get("/", (req, res) => { // GET-Route für die Startseite
    res.send("The API is working.") // Gibt eine einfache Antwort zurück
})

app.get("/plant", (req, res) => { // GET-Route für alle Pflanzen
    db.all(selectAllPlantsQuery, (err, rows) => { // Führt die SELECT-Abfrage aus
        if (err) {
            res.status(404).send("Error in your query request.") // Fehler beim Abrufen
        } else {
            res.json(rows) // Gibt die Daten als JSON zurück
        }
    })
})

app.post("/plant", (req, res) => { // POST-Route zum Hinzufügen einer Pflanze
    const { plant_name, species, family, origin, growth_form } = req.body // Entpackt die Daten aus dem Request Body

    db.run(`INSERT INTO plants (plant_name, species, family, origin, growth_form) VALUES(?,?,?,?,?)`,
        [plant_name, species, family, origin, growth_form]) // Fügt neue Pflanze in die Tabelle ein

    res.status(201).send("Plants were added successfully.") // Sendet Erfolgsnachricht zurück
})

app.listen(3000) // Startet den Server auf Port 3000
