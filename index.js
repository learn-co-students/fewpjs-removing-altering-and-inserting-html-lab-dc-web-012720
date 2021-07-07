// Write your code here!
let name = "Jason"
document.querySelector("#main").remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = `${name} is the champion`
