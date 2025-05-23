import createBtn from "./btn.js";

createBtn()


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

window.onscroll = function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById("stage").className = "slideUp";
    } if (document.documentElement.scrollTop > 1000) {
        document.getElementById("model").className = "slideLeft";document.getElementById("jeu").className = "slideRight";
    }
}