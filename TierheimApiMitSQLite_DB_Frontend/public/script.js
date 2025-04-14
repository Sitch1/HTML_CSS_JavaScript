
const buttonShowAnimals = document.getElementById("button_show_animals")
const showAnimals = document.getElementById("show_animals")

const buttonAddPet = document.getElementById("addPet")
const inputName = document.getElementById("name")
const inputArt = document.getElementById("art")

const answerBox = document.getElementById("answer")


buttonAddPet.addEventListener("click")

// buttonShowAnimals.addEventListener("click", () => {
//     fetch("http://127.0.0.1:3000/tiere", )
//     .then(res => res.json())
//     .then(data => displayData(data))

//     function displayData(data) {
//         console.log(data)
//     }
// });

function createAnimal() {
    try {
        const requestBody = {
            name: inputName.value,
            art: inputArt.value
        }

        fetch("http://localhost:3000/tiere", {
            method: "POST",
            headers: { "Conten-Type": "application/json" },
            body: JSON.stringify(requestBody)
        }).then(res => res.json())
            .then(data => {
                answerBox.innerText = JSON.stringify(data);
                refreshList()
            })
            .catch(err => {
                console.error("post error: " + err);
            })
    } catch (err) {
        console.log("fehler: " + err)
    }
}

buttonShowAnimals.addEventListener("click", async () => {
    const res = await fetch("http://localhost:3000/tiere")
    displayData(await res.json())

    function displayData(data) {
        console.log(data)
        showAnimals.innerHTML = "";
        data.forEach(tier => {
            console.log(tier)
            const li = document.createElement("li");
            li.textContent = tier.name;
            showAnimals.appendChild(li);
        });
    }
});


// function refreshList({
//     showAnimals.innerHTML = "";
//     fetch("http://localhost:5005/tiere")
//         .then
// })