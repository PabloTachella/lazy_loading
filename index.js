import { registerImage } from './lazy.js'
import Counter from './Counter.js'

const counterAddedImages = document.querySelector('.added-images')
const counterUploadedImages = document.querySelector('.uploaded-images')
let addedImages

const min = 1
const max = 122
const random = () => Math.floor(Math.random() * max - min)

const createImageNode = () => {
    const image = document.createElement('img')
    const container = document.createElement('div')
    image.classList.add('image')
    container.classList.add('container-image')

    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
    container.appendChild(image)
    registerImage(container)
    
    return container
}

const addImage = () => {
    const image = createImageNode()
    images.appendChild(image)

    addedImages = Counter.getAddedImages
    addedImages++
    counterAddedImages.innerHTML = addedImages

    Counter.setAddedImages = addedImages
}
const clearImages = () => {
    [...images.childNodes].forEach(child => {
        child.remove()
    })

    counterAddedImages.innerHTML = 0
    counterUploadedImages.innerHTML = 0

    Counter.setUploadedImages = 0
    Counter.setAddedImages = 0
}

const images = document.querySelector('.images')
const add = document.querySelector('.add-image')
const clear = document.querySelector('.clear')

add.addEventListener('click', addImage)
clear.addEventListener('click', clearImages)
