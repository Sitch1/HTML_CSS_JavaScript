const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const answerField = document.getElementById("answer");
const list = document.getElementById("list");
const submitButton = document.getElementById("submitButton");
const methodSelect = document.getElementById("method");
const deleteId = document.getElementById("deleteId");
const deleteButton = document.getElementById("deleteButton");
const changeMovieId = document.getElementById("number");
const changeTitle = document.getElementById("createInputTitle");


submitButton.addEventListener("click", () => {
    if (methodSelect.value == "create") {
        createMovie()
    } else if (methodSelect.value == "change") {
        changeMovie()
    }
})

methodSelect.addEventListener("change", () => {
    if (methodSelect.value == "create") {
        idInput.style.display = "none";
    } else if (methodSelect.value == "change") {
        idInput.style.display = "block";
    }
})

deleteButton.addEventListener("click", () => {
    deleteMovie()
})

searchButton.addEventListener("click", () => {
    const inputValue = searchInput.value;

    if (inputValue) {
        fetch("http://localhost:5005/movie/search?Title=" + inputValue)
            .then(res => res.json())
            .then(data => {
                let movieInfo = data.Id + "\n" + data.Title + "\n" + data.Year
                console.log(data);
                answerField.innerText = movieInfo;
                refreshList()
            })
            .catch(err => {
                console.error("Fehler beim auslesen!", err);
            })

    } else { console.log("Kein Inhalt!") }
})

function createMovie() {
    try {
        const requestBody = {
            Title: createInputTitle.value,
            Year: createInputYear.value
        }
        fetch("http://localhost:5005/movie", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        }).then(res => res.json())
            .then(data => {
                answerField.innerText = JSON.stringify(data);
                refreshList()
            })
            .catch(err => {
                console.error("Mistake POST", err);
            })
    } catch (err) {
        console.log("Mistake fetch: " + err)
    }
}

function changeMovie() {
    try {
        const response = fetch(`http://localhost:5005/movie/${changeMovieId.value}`, {
            method: "PUT",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify({ Title: changeTitle.value })
        });
        if (!response.ok) {
            throw new Error("Fehler beim Ändern des Films");
        }

        const data = response.json();
        answerField.innerText = JSON.stringify(data);
        refreshList();
    } catch (err) {
        console.error("Fehler in changeMovie", err);
    }
}

function deleteMovie() {
    fetch(`http://localhost:5005/movie/${deleteId.value}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(data => {
            answerField.innerText = JSON.stringify(data)
            refreshList()
        })
}

function refreshList() {
    list.innerHTML = "";
    fetch("http://localhost:5005/movie")
        .then(res => res.jason())
        .then(data => {
            data.forEach(element => {
                let newListItem = document.createElement("li");
                newListItem.innerHTML = `#${element.id}:${element.Title}(${element.Year})`
                list.appendChild(newListItem)
            });
        })
        .catch(err => {
            console.error("fehler beim refresh!")
        })
}