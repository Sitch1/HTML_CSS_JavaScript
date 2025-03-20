let myName = prompt("Wie heißt du, tapferer Held?");
alert("Freut mich, dich kennenzulernen, " + myName + "!");

let alter = prompt("Wie alt bist du?");
if (alter >= 18) {
    alert("Du bist alt genug, um in den Kampf zu ziehen!");
    let isEingabeKorekt = false
    while (isEingabeKorekt === false) {
        let waffe = prompt("Wählst du das Schwert oder Magie?");

        if (waffe.toLowerCase() === "schwert") {
            alert("Du schwingst dein Schwert und kämpfst tapfer!");
            isEingabeKorekt = true
        }

        else if (waffe.toLowerCase() === "magie") {
            alert("Du wirkst einen mächtigen Zauber!");
            isEingabeKorekt = true
        }

        else {
            alert("Wähle bitte eines der Waffen!")
        }
    }

} else {
    alert("Du bist noch zu jung. Trainiere weiter und kehre später zurück!");
}

if (alter >= 18) {
    alert(myName + " Start the game")
}

alert("Vor dir steht eine alte, mit Runen bedeckte Tür.");
alert("Eine Stimme ertönt: 'Ich öffne mich nur, wenn du mein Rätsel löst.'");
alert("Rätsel: Ich bin nicht lebendig, aber ich wachse. Ich habe keine Lungen, aber ich brauche Luft. Ich habe keinen Mund, und dennoch verschlinge ich alles. Was bin ich?'");
let isEingabeKorrekt = false;

while (isEingabeKorrekt === false) {
    let antwort = prompt("Gib deine Antwort ein:");
    if (antwort !== null && antwort.toLowerCase() === "feuer") {
        isEingabeKorrekt = true;

        let sound = new Audio("door.mp3");
        sound.volume = 0.3;
        sound.play();
        alert("Die Stimme sagt: 'Das ist richtig. Die Tür öffnet sich mit einem lauten Knarren.'");
        alert("Du betrittst die ungeforschte Welt!");

        setTimeout(() => {
            let video = document.createElement("video");
            video.src = "Wood.mp4";
            video.autoplay = true;
            video.style.width = "100%";
            document.body.appendChild(video);
            video.muted = true;
            video.play();
        }, 100);
    } else {
        let sound = new Audio("Lachen.mp3");
        sound.volume = 0.3;
        sound.play();
        alert("Die Stimme lacht: 'Falsch! Versuche es erneut, wenn du den Mut hast.'");
    }
}