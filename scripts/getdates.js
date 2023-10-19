let lastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModif

const hamp= document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamp.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamp.classList.toggle('show');
});


