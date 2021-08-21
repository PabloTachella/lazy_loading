const isIntersecting = entry => entry.isIntersecting

const accion = (entry) =>  {
    const node = entry.target
    console.log('Hola')

    observer.unobserve(node)
}

const observer = new IntersectionObserver( (entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

export const registerImage = (image) => {
    observer.observe(image)
}