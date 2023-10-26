let lastVisited = document.getElementById("lastVisited").value;

let numOfVisit = Number(window.localStorage.getItem("numOfVisits")) || 0;

if (numOfVisit !== 0) {
    lastVisited = numOfVisit;
} else {
    lastVisited = `This is your first visit. 🥳 Welcome!`;
}
numOfVisit++;

localStorage.setItem("numOfVisits", numOfVisit);

document.getElementById("output").innerHTML = lastVisited