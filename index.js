// Write your code here!

//Locating the <main id="main"> in the html
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";

document.body.appendChild(newHeader);