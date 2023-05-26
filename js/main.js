// accessing document property
console.log(document.title)

// finding an element by id
const infoPara = document.getElementById("info")
console.log(infoPara)
console.dir(infoPara) //if console.log prints the string rather then the properties use console.dir

//addition assignment to the textcontent property of infopara
infoPara.textContent += "cam"

//finding an element using css selector
let container = document.querySelector(".container")
console.log(container)

// using style objects of an element
container.style.maxWidth ="800px"
container.style.margin = "0 auto"

// finding all the elements using css selector
let allNodes = document.querySelectorAll(".type")
console.log(allNodes)

// accessing the element on a second postition and setting its style background
allNodes[1].style.background = "cyan"

// looping through the allNodes array and assigning style.border to each item
for(let eachNode of allNodes){
    eachNode.style.border = "1px solid black"
}

// traversing the DOM

// finding element by id
const mainNodes = document.getElementById("threeNodes")
console.log(mainNodes)

// accessing the children property of the mainNotes variable
const listOfNodes =mainNodes.children

// selecting a second item and getting its styles
listOfNodes[1].style.margin = "10px 0"

const firstNode = mainNodes.firstElementChild
console.log(firstNode.textContent)

// attribute methodes
const learnMore = document.getElementById("learn")
// getting attribute value
console.log(learnMore.getAttribute("href"))
console.log(learnMore.getAttribute("class"))

//getting attribute value that is a property like id by using the property name
console.log(learnMore.id)

// setting attribute value
learnMore.setAttribute("target", "_blank")

// adding a class using classlist
learnMore.classList.add("btn")

const fakeConsole = document.getElementById("box")
fakeConsole.setAttribute("style", `
background-color: powderblue;
padding: 10px;
border 1px solid black;`)

fakeConsole.innerHTML += "<p>This is a fake console, where we can output our information</p>"
fakeConsole.innerHTML += "The above URL is " + learnMore.getAttribute("href")
fakeConsole.innerHTML += "<br>" + document.URL

