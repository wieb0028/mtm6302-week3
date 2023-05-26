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
