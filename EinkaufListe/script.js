const addButton = document.getElementById("addButton");
const artikelInput = document.getElementById("artikel");
const anzahlInput = document.getElementById("anzahl");
const preisInput = document.getElementById("preis");
const liste = document.getElementById("liste");
const gesamt = document.getElementById("gesamt");
const clearButton = document.getElementById("clearButton")

let gesamtPreis = 0;

addButton.addEventListener("click", () => {
    const artikel = artikelInput.value;
    const anzahl = anzahlInput.value;
    const preis = preisInput.value;

    let isValid = true;

    if (!artikel) {
        artikelInput.style.border = "2px solid red"
        isValid = false;
    } else {
        artikelInput.style.border = ""
    }

    // Neues Element erstellen und in die Liste einfügen
    const new_li = document.createElement("li");
    new_li.style.
        new_li.textContent = `${anzahl} x ${artikel}: ${preis}€ p.P. ------ ${anzahl * preis}€`;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", () => {
    });


    clearButton.addEventListener("click", () => {
        liste.innerHTML = "";
        gesamtPreis = 0;
        updatePreis();
    })
    // let kategorieEmoji = "";
    // switch (kategorie) {
    //     case "Obst": kategorieEmoji = "🍎"; break;
    //     case "Gemüse": kategorieEmoji = "🥕"; break;
    //     case "Drogerie": kategorieEmoji = "🛀"; break;
    //     default: kategorieEmoji = "🛒";
    // }


    // Füge einen Löschen Button hinzu
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
        liste.removeChild(new_li);
        gesamtPreis -= anzahl * preis;
        updatePreis();
    });
    new_li.remove(clearButton);
    new_li.prepend(checkBox);
    new_li.appendChild(deleteButton);

    liste.appendChild(new_li);

    // Gesamtpreis aktualisieren
    gesamtPreis += anzahl * preis;
    updatePreis();

    // Inputfelder leeren
    artikelInput.value = "";
    anzahlInput.value = "";
    preisInput.value = "";
})

function updatePreis() {
    gesamt.textContent = `Gesamt: ${gesamtPreis}€`;
}