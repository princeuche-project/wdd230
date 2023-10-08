let lastvisit = new Date(document.lastModified);
document.getElementById("lastvisit").innerHTML = lastvisit;


const hamp = document.querySelector('#menu');
const navigation = document.querySelector('.navigation-bar');

hamp.addEventListener('click', () => {
  navigation.classList.toggle('show');
  hamp.classList.toggle('show');
});