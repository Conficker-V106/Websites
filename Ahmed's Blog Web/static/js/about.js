
var i = 0;
var j = 0
var txt = "Ahmed is a cybersecurity enthusiast with a passion for safeguarding the digital world. With extensive knowledge and a hacker's mindset, he's on a mission to find and fix vulnerabilities through bug bounty hunting. Equipped with a strong ethical approach, Ahmed collaborates with organizations to strengthen their defenses. Beyond hacking, he shares cybersecurity insights, empowering others to navigate the digital landscape responsibly. Join Ahmed in creating a safer online environment!";
var txt1 = "About Ahmed"
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quote").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWritermain() {
  
  if (j < txt1.length) {
    document.getElementById("name").innerHTML += txt1.charAt(j);
    j++;
    setTimeout(typeWritermain, speed);
  }else{
    typeWriter()
  }
}



// dark light

document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container")[0];
const themeIcon = document.getElementById("theme-icon");
container.addEventListener("click", setTheme);
function setTheme() {
switch (theme) {
  case "dark":
    setLight();
    theme = "light";
    break;
  case "light":
    setDark();
    theme = "dark";
    break;
}
}
nav = document.getElementById("light1")
navtitle = document.getElementById("light2")
body = document.getElementById("light3")
textt = document.getElementById("light4")
function setLight() {
root.style.setProperty(
  "--bs-dark",
  "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
);
nav.classList.remove("nav_bar")
nav.classList.add("nav_bar2")
navtitle.classList.remove("nav_title")
navtitle.classList.add("nav_title2")
body.classList.add("body2")
textt.classList.remove("bg-text")
textt.classList.add("bg-text2")
container.classList.remove("shadow-dark");
setTimeout(() => {
  container.classList.add("shadow-light");
  themeIcon.classList.remove("change");
}, 300);
themeIcon.classList.add("change");
themeIcon.src = sun;



}


function setDark() {
root.style.setProperty("--bs-dark", "#212529");
container.classList.remove("shadow-light");
setTimeout(() => {
  container.classList.add("shadow-dark");
  themeIcon.classList.remove("change");
}, 300);
themeIcon.classList.add("change");
themeIcon.src = moon;
nav.classList.remove("nav_bar2")
nav.classList.add("nav_bar")
navtitle.classList.remove("nav_title2")
navtitle.classList.add("nav_title")
body.classList.remove("body2")
textt.classList.remove("bg-text2")
textt.classList.add("bg-text")
}


function myFunction() {
var x = document.getElementById("light1");
if (x.className === "topnav nav_bar") {
  document.getElementById("light4").style.margin = "40px 0px 0px 0px"; 
  x.className = "topnav responsive";
  
} else {  
  document.getElementById("light4").style.margin = "0px 0px 0px 0px"; 
  x.className = "topnav nav_bar";

}
}