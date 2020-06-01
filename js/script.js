

//1) Select the section with an id of container without using querySelector.

console.log(document.getElementById("container"));

//2)
console.log(document.querySelector("#container"));

//3)
console.log(document.getElementsByClassName("second"));

//4)
console.log(document.querySelector("ol .third"));

//5) Had to comment this out, but uncomment to test
//document.getElementById("container").innerText = "Hello World";

//6)
const addMain = document.querySelector(".footer");

addMain.classList.add("main");

console.log(addMain);


//7)Using addMain from number 7
addMain.classList.remove("main");

console.log(addMain);

//8)
var addList = document.createElement("li");

console.log(addList);
//console.log(document.createElement("li"));

//9)
console.log(addList.innerText = "four");
//<li>four</li>

//10)
const appendingHere = document.querySelector("ul");
console.log(appendingHere.appendChild(addList));

//12)
const loopList = document.querySelectorAll("ol li");
for(let i = 0 ; i < loopList.length; i++)
{
    loopList[i].style.backgroundColor = "green";
}


//13)
const removeDiv = document.querySelector(".footer");
console.log(removeDiv.remove());




