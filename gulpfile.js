"use strict"
const tabs = document.getElementsByClassName("tab");
const h1 = document.querySelector("h1");
const buttons = document.getElementsByTagName("button");

// Parodo pirmą tabą užkraunant
tabs[0].style.display = "block";

function showTab(evt, id) {
  
    for (let i = 0; i < tabs.length; i++) {
        // Paslepia visus tabus, kai paleidžiama funkcija
        tabs[i].style.display = "none";

        // Nuiima selected klasę nuo mygtukų
        buttons[i].classList.remove("selected");
    }

    // Rodo tik tą pagal id paleidžiant funkciją
    document.getElementById(id).style.display = "block";

    // Prideda selected klasę prie paspausto mygtuko
    evt.currentTarget.classList.add("selected");
    
    // Keičia h1 tekstą pagal pasirinktą mygtuką
    h1.textContent = evt.currentTarget.textContent;
}

