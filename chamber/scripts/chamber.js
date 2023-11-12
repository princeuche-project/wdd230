let lastvisit = new Date(document.lastModified);
document.getElementById("lastvisit").innerHTML = lastvisit;


// const hamp = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation-bar');

// hamp.addEventListener('click', () => {
//   navigation.classList.toggle('show');
//   hamp.classList.toggle('show');
// });



const themeToggler = document.querySelector(".theme-toggler")


themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("lemmon");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
