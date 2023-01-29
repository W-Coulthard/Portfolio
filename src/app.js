/*Hamburger menu*/

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)



let mybutton = document.getElementById("myBtn");

//* Scroll to top button*//

// When the user scrolls down 20px from the top of the document, show the button
document.getElementById("myBtn").style.display = "none";


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*Alert for contact form*/


/*const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', submitReply);

function submitReply() {
const name = document.querySelector('input[name="name"]').value;
const email = document.querySelector('input[name="email"]').value;
const message = document.querySelector('textarea[name="text"]').value;

if (name && email && message) {
alert("Thank you for your message. I will get back to you as soon as possible.");
} else {
alert("Please fill out all fields.");
}
};*/
