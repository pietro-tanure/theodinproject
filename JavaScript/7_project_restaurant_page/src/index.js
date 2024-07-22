import './style.css';
import loadMenu from './menu';
import loadHome from './home';
import loadAbout from './about';

console.log("test");

const content = document.getElementById('content')
const menuButton = document.getElementById('menu')
const homeButton = document.getElementById('home')
const aboutButton = document.getElementById('about')

menuButton.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(loadMenu());
})

homeButton.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(loadHome());
})

aboutButton.addEventListener("click", () => {
    content.removeChild(content.firstChild);
    content.appendChild(loadAbout());
})

content.appendChild(loadHome());
