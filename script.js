function createIndicator(tittleText) {
    let tittle = document.createElement("h2")
    tittle.classList.add("indicator")
    tittle.textContent = tittleText
    return tittle
}

function createFoodOption(tittleText, imageText) {

    let foodOptionContainer = document.createElement("div")
    foodOptionContainer.classList.add("foodOption")
    let tittle = document.createElement("h3")
    tittle.textContent = tittleText
    let image = document.createElement("img")
    image.setAttribute("src", imageText)
    foodOptionContainer.appendChild(tittle)
    foodOptionContainer.appendChild(image)
    return foodOptionContainer

}
function createButton(tittleButton) {
    let button = document.createElement("button")
    button.classList.add("btn")
    button.textContent = tittleButton
    return button
}

function createContainer(className) {
    let opcionContainer = document.createElement("div")
    opcionContainer.classList.add(className)
    return opcionContainer
}
let father = document.querySelector(".blueBox")
let indicatorContainer = createContainer("indicatorContainer")
let indicator = createIndicator("Estacion 1 : Seleccione el tipo de pan")
indicatorContainer.appendChild(indicator)
father.appendChild(indicatorContainer)

function createBlueBox() {
let father = document.querySelector(".blueBox")
let indicatorContainer = createContainer("indicatorContainer")
let indicator = createIndicator("Estacion 1 : Seleccione el tipo de pan")
indicatorContainer.appendChild(indicator)
father.appendChild(indicatorContainer)

}











