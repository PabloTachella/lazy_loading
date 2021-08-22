const counterUploadedImages = document.querySelector('.uploaded-images')
let uploadedImages = 0

const isIntersecting = entry => entry.isIntersecting

const loadImage = (entry) =>  {
    const container = entry.target
    const image = container.firstChild
    image.src = image.dataset.src

    uploadedImages++
    counterUploadedImages.innerHTML = uploadedImages

    observer.unobserve(container)
}

const observer = new IntersectionObserver( (entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (image) => {
    observer.observe(image)
}