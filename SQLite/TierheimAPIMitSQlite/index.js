const express = require("express") // Importiert das Express-Framework
const app = express() // Erstellt eine neue Express-Anwendung
const sqlite3 = require("sqlite3") // Importiert das SQLite3-Modul

const db = new sqlite3.Database(":memory:") // Erstellt eine In-Memory SQLite-Datenbank (wird nicht gespeichert, flüchtig)

db.serialize(() => { // Führt alle DB-Befehle in Reihenfolge nacheinander aus
    db.run(`CREATE TABLE tiere ( 
    id INTEGER PRIMARY KEY,               
    tierart VARCHAR(50),                  
    name VARCHAR(50),                     
    krankheit VARCHAR(100),              
    age INT,                              
    gewicht REAL);`)
    // Primärschlüssel (automatisch hochzählend) 
    // Tierart, z. B. "Hund"
    // Name des Tieres  
    // Krankheit (z. B. "Husten")  
    // Alter des Tieres (Ganzzahl)               
    // Gewicht (Kommazahl)

    // db.run(`INSERT INTO tiere(...)`)   // Beispiel für einen Insert-Befehl (auskommentiert)

    selectAllTiereQuery = `SELECT * FROM tiere` // SQL-Abfrage, um alle Tiere auszuwählen
    db.all(selectAllTiereQuery, (err, rows) => { // Führt die Abfrage aus
        if (err) {
            console.log(err) // Gibt den Fehler aus, falls einer auftritt
        } else {
            console.log(rows) // Gibt das Ergebnis (Tiere) in der Konsole aus
        }
    })

    process.on("exit", () => { // Wenn das Programm beendet wird...
        db.close() // ...wird die Datenbank sauber geschlossen
    })
})

app.use(express.json()) // Middleware: ermöglicht das Parsen von JSON-Daten aus dem Request-Body

app.get("/", (req, res) => { // Route: wenn GET-Anfrage an "/" gesendet wird...
    res.send("Die API funktioniert!") // ...antwortet der Server mit diesem Text
})

app.get("/tiere", (req, res) => { // Route: wenn GET-Anfrage an "/tiere" gesendet wird...
    db.all(selectAllTiereQuery, (err, rows) => { // Führt SELECT-Abfrage aus
        if (err) {
            res.status(404).send("Fehler in deiner Query Anfrage") // Bei Fehler: Sende 404
        } else {
            res.json(rows) // Ansonsten: sende die Tierdaten als JSON
        }
    })
})

app.post("/tiere", (req, res) => { // Route: wenn POST-Anfrage an "/tiere" gesendet wird...
    const { tierart, name, krankheit, age, gewicht } = req.body // Extrahiere Daten aus dem Request-Body
    db.run(`INSERT INTO tiere (tierart,name,krankheit,age,gewicht) VALUES(?,?,?,?,?)`,
        [tierart, name, krankheit, age, gewicht]) // Füge die Daten in die DB ein
    res.status(201).send("Tier wurde erfolgreich hinzugefügt") // Sende Erfolgsnachricht mit Status 201
})

app.listen(3000) // Starte den Server und höre auf Port 3000
