let myName;

let alter; // Globale Variable für das Alter

function spielStarten() {
    myName = prompt("Wie heißt du, tapferer Held?");
    alert("Freut mich, dich kennenzulernen, " + myName + "!");

    let isEingabeKorrekt1 = false;

    while (!isEingabeKorrekt1) {
        alter = parseInt(prompt("Wie alt bist du?")); // Globale Variable ändern
        if (alter >= 90) {
            alert("Willst Du nicht besser zurück in Mamas Bettchen, du alter Greis?");

        } else if (alter >= 18 && alter < 90) {
            alert("Wohlan edler Knappe, dann tritt ein und rüste dich.");
            isEingabeKorrekt1 = true;
        } else {
            alert("Du bist noch zu jung. Trainiere weiter und kehre später zurück!");

        }
    }


    let isEingabeKorekt = false;
    while (!isEingabeKorekt) {
        let waffe = prompt("Wählst du das Schwert oder Magie?");

        if (waffe.toLowerCase() === "schwert") {
            alert("Du schwingst dein Schwert und kämpfst tapfer!");
            isEingabeKorekt = true;
        } else if (waffe.toLowerCase() === "magie") {
            alert("Du wirkst einen mächtigen Zauber!");
            isEingabeKorekt = true;
        } else {
            alert("Wähle bitte eine der Waffen!");
        }
    }
    // Spiel kann weitergehen





    // Spiel nur fortsetzen, wenn der Spieler alt genug ist

    alert(myName + ", das Spiel beginnt!");

    alert("Vor dir steht eine alte, mit Runen bedeckte Tür.");
    alert("Eine Stimme ertönt: 'Ich öffne mich nur, wenn du mein Rätsel löst.'");
    alert("Rätsel: Ich bin nicht lebendig, aber ich wachse. Ich habe keine Lungen, aber ich brauche Luft. Ich habe keinen Mund, und dennoch verschlinge ich alles. Was bin ich?'");

    let isEingabeKorrekt = false;

    while (!isEingabeKorrekt) {
        let antwort = prompt("Gib deine Antwort ein:");

        if (antwort !== null && antwort.toLowerCase() === "feuer") {
            isEingabeKorrekt = true;
            let sound = new Audio("door.mp3");
            sound.volume = 0.5;
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
            sound.volume = 0.5;
            sound.play();
            alert("Die Stimme lacht: 'Falsch! Versuche es erneut, wenn du den Mut hast.'");
        }
    }

}