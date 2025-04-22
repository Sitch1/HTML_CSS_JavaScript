import "./App.css"
import { useState } from "react"


function App() {

  const [colour, setColour] = useState("red")

  return (
    <>
      <h1 style={{ color: colour }}>Ich bin eine Überschrift mit Farb wechsel wenn der Button gedrückt wird</h1>
      <button onClick={() => setColour("blue")}>ändere die farbe zu blau</button>
      <button onClick={() => setColour("green")}>Ändert die Farbe wieder zurück</button>
    </>
  );

}

export default App;
