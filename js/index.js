const logoHeader = document.querySelector('h1');

logoHeader.addEventListener('mouseover', function (event) {
    event.target.style.color = 'orange'
});

// I am making the nav not fixed
const header = document.getElementsByClassName("main-navigation");

window.addEventListener("scroll", function () {
  header[0].style.position = "relative";
});

// change background color of nav links
const navLinks = document.querySelectorAll('.nav-link');
Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseenter', (event) => {
        event.target.style.color = 'blue'
        event.target.style.backgroundColor = 'yellow'
    })
}) 
//double click around bottom h4's for dotted border
const h4 = document.querySelectorAll('h4');
Array.from(h4).forEach(element => {
    element.addEventListener('dblclick', (event) => {
    event.target.style.border = '3px dotted black'})
})

 //I want to change colors of the background when the window is resized
const darkMode = document.getElementsByTagName("body");
const doNotChangeThese = document.querySelectorAll("img");

window.addEventListener("resize", () => {
  console.log(darkMode);
  darkMode[0].style.filter = "invert(1) hue-rotate(180deg)";
  darkMode[0].style.backgroundColor = "black";
  Array.from(doNotChangeThese).forEach((image) => {
    image.style.filter = "invert(1) hue-rotate(180deg)";
  });
});
// I want to record all key presses inside the console
document.addEventListener("keydown", (key) => {
    console.log("You pressed: ", key.key);
  });
// I want the change the color
const buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach(button => {
    button.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'white'
        event.target.style.color = 'black'
        event.target.textContent = 'Fun awaits!'
    })
})
//change the text and color
Array.from(buttons).forEach(button => {
    button.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'rgb(23, 162, 184)'
        event.target.style.color = 'white'
        event.target.textContent = 'Sign me up!'
    })
})
// change size of header
const h1 = document.querySelector('h1')
h1.addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '6rem'
    event.target.style.backgroundColor = 'yellow'
    event.target.style.color = 'black'
})
// change back to normal
h1.addEventListener('mouseleave', (event) => {
    event.target.style.fontSize = '4rem'
    event.target.style.backgroundColor = 'white'
    event.target.style.color = 'black'
})

