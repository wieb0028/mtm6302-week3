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

console.log(learnMore.getAttribute("href"))