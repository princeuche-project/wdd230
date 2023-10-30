let now = new Date();
let msTodays = Date.now()
let dayOfWeek = now.getDay();
let sameday = msTodays

let lastVisited = document.getElementById("lastVisited").value;

let numOfVisit = Number(window.localStorage.getItem("numOfVisits")) || 0;

if (numOfVisit !== 0 && dayOfWeek !== 0) {
    lastVisited = `You last visited ${numOfVisit} days ago.`
} else if (dayOfWeek > msTodays) {
    lastVisited = `Back so soon! Awesome`;
} else {
    lastVisited = "Welcome! Lets us know if you have any questions.";
}
numOfVisit++;

localStorage.setItem("numOfVisits", numOfVisit);

document.getElementById("output").innerHTML = lastVisited