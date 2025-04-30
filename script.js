// function bgb() {
//     document.querySelector("body").style.backgroundColor = "rgb(235, 235, 235)";
//     document.querySelector("button").style.backgroundColor = "rgb(61, 61, 61)"
//     document.querySelector("button").style.color = "white"
//     document.querySelector("body").style.color = "black";
//     document.querySelector(".fleche img").style.invert = "none";
// }

function saveTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme)
};

function toggleTheme() {
    const current = document.body.className;
    const next = current === "dark" ? "light" : "dark";
    saveTheme(next)
};

window.onload = () => {
    const savedTheme = localStorage.getItem ("theme") || "dark";
    saveTheme(savedTheme)
}


fetch('stages.json')
.then((response) => response.json())

.then((stages) => 
{
    console.log(stages);

    mesStages(stages)    
})

.catch(err => {
    console.error(err);
})

function mesStages(listeStages) {
    const stage = document.getElementById("stage");

    listeStages.forEach(s => {
        const div = document.createElement('div');

        div.innerHTML = `
        <h3>${s.nom}</h3>
        <p>${s.date}</p>
        <p>${s.lieu}</p>
        <p>${s.text}</p>
        `
        stage.appendChild(div)
    });
}