"use strict"
const tabs = document.getElementsByClassName("tab");
const h1 = document.querySelector("h1");
const buttons = document.getElementsByTagName("button");

// parodo tabus visus iš eilės su visu turiniu
// tabs[0].style.display = "block";

// Funkcija dirba, kad parodytų tabų info
function showTab(evt, id) {
  
    for (let i = 0; i < tabs.length; i++) {

        tabs[i].style.display = "none";

        buttons[i].classList.remove("selected");
        
    }

    document.getElementById(id).style.display = "block";

    evt.currentTarget.classList.add("selected");
    
    h1.textContent = evt.currentTarget.textContent;
}


