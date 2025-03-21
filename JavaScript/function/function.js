function vorstellung() {
    console.log("Hallo, ich bin der Dustin");
    console.log("Dies ist ein function übung");
    console.log("Probieren wir das doch mal aus");
}

vorstellung();

function vorstellung1(name, City, age) {
    console.log("Hallo, ich bin der/die " + name)
    console.log("Ih komme aus " + City)
    console.log("Ich bin " + age + " Jahre alt!")

}

let myName = prompt("Gib deinen Namen ein: ")
let City = prompt("Gib deine Stadt ein: ")
let age = prompt("Gebe dein alter an: ")

vorstellung(myName, City, age);
