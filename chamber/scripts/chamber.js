let lastvisit = new Date(document.lastModified);
document.getElementById("lastvisit").innerHTML = lastvisit;


const hamp = document.querySelector('#menu');
const navigation = document.querySelector('.navigation-bar');

hamp.addEventListener('click', () => {
  navigation.classList.toggle('show');
  hamp.classList.toggle('show');
});



const themeToggler = document.querySelector(".theme-toggler")

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("lemmon");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})