let now = new Date();
let nowSame = Date.now();
let dayOfWeek = now.getDay();
let sameday = nowSame

let lastVisited = document.getElementById("lastVisited").value;

let numOfVisit = Number(window.localStorage.getItem("numOfVisits")) || 0;

if (numOfVisit !== 0 && dayOfWeek !== 0) {
    lastVisited = `You last visited ${numOfVisit} days ago.`
} else if (sameday == dayOfWeek) {
    lastVisited = `Back so soon! Awesome`;
} else {
    lastVisited = "Welcome! Lets us know if you have any questions.";
}
numOfVisit++;

localStorage.setItem("numOfVisits", numOfVisit);

document.getElementById("output").innerHTML = lastVisited






// let month = now.getMonth();
// let dayOfMonth = now.getDate();

// // initialize the message
// let message;
// // Check if the days of the month is Holidays or days of the week to be weekends.
// if (dayOfWeek == 0 && dayOfWeek == 6) {
//     message = "Sleep In!"
// } else if ((month == 0 && dayOfMonth == 1) ||
//     (month == 6 && dayOfMonth == 4) ||
//     (month == 11 && dayOfMonth == 25)) {
//     message = "Sleep In!"
// } else {
//     message = "Get Up!"
// }
// // out put the message.
// document.getElementById("output").innerHTML = message
// }