// function myFunction() {
//     let x = document.getElementById("myNav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
const hamp = document.querySelector('#menu');
const navigation = document.querySelector('.navigation-bar');

hamp.addEventListener('click', () => {
  navigation.classList.toggle('show');
  hamp.classList.toggle('show');
});