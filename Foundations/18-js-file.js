const container = document.querySelector("#container")

const text1 = document.createElement("p");
text1.textContent = "Hey! I'm red";
text1.style.color = "red";

const text2 = document.createElement("h3");
text2.textContent = "Hey! I'm blue";
text2.style.color = "blue";

const el3 = document.createElement("div");
el3.style.backgroundColor = "pink";
el3.style.borderBlockColor = "black";

const el4 = document.createElement("h1");
el4.textContent = "I'm in a div";

const el5 = document.createElement("p");
el5.textContent = "ME too";

el3.appendChild(el4);
el3.appendChild(el5);

container.appendChild(text1);
container.appendChild(text2);
container.appendChild(el3);


const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello world"); //method 1
btn.addEventListener("click", ()=>{alert("Hello world");}); //method 2

btn.addEventListener("click", function (e) {
    console.log(e);
    e.target.style.background = "blue";
  });

  
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
      alert(button.id);
    });
  });
  