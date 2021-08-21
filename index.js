const min = 1
const max = 122
const random = () => Math.floor(Math.random() * max - min)

const createImageNode = () => {
    const image = document.createElement('img')
    const container = document.createElement('div')
    image.classList.add('image')
    container.classList.add('container-image')

    image.src = `https://randomfox.ca/images/${random()}.jpg`
    container.appendChild(image)
    
    return container
}

const addImage = () => {
    const image = createImageNode()
    images.appendChild(image)
}
const clearImages = () => {
    [...images.childNodes].forEach(child => {
        child.remove()
    })
}

const images = document.querySelector('.images')
const add = document.querySelector('.add-image')
const clear = document.querySelector('.clear')

add.addEventListener('click', addImage)
clear.addEventListener('click', clearImages)
