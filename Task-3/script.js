const thumbnails = document.querySelectorAll(".thumbnail")
const lightbox = document.getElementById("lightbox")
const lightboxImage = document.getElementById("lightbox-image")
const prevImage = document.getElementById("prev-image")
const nextImage = document.getElementById("next-image")
const closeBtn = document.getElementById("close")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

let currentImage = 0

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click" , (e) => {
    currentImage = index
    const FullImage = e.target.getAttribute("src")
    lightboxImage.src = FullImage
    prevImage.src = thumbnails[(currentImage - 1 + thumbnails.length) % thumbnails.length].getAttribute("src")
    nextImage.src = thumbnails[(currentImage + 1) % thumbnails.length].getAttribute("src")
    lightbox.classList.add("visible")
})})

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("visible")
})

lightbox.addEventListener("click", (e) => {
    if(e.target.id === "lightbox") {
        lightbox.classList.remove("visible")
    }
})

prevBtn.addEventListener("click", () => {
    currentImage = (currentImage - 1 + thumbnails.length) % thumbnails.length
    lightboxImage.src = thumbnails[currentImage].getAttribute("src")
    prevImage.src = thumbnails[(currentImage - 1 + thumbnails.length) % thumbnails.length].getAttribute("src")
    nextImage.src = thumbnails[(currentImage + 1) % thumbnails.length].getAttribute("src")
    applyAnimation("prev")
})

nextBtn.addEventListener("click", () => {
    currentImage = (currentImage + 1) % thumbnails.length
    lightboxImage.src = thumbnails[currentImage].getAttribute("src")
    prevImage.src = thumbnails[(currentImage - 1 + thumbnails.length) % thumbnails.length].getAttribute("src")
    nextImage.src = thumbnails[(currentImage + 1) % thumbnails.length].getAttribute("src")
    applyAnimation("next")

})

function applyAnimation(animate) {
    const animation = (animate != "prev") ? "scrollLeft" : "scrollRight"
    lightboxImage.style.animation = `${animation} 0.5s ease-out`
    prevImage.style.animation = `${animation} 0.5s ease-out`
    nextImage.style.animation = `${animation} 0.5s ease-out`
    lightboxImage.addEventListener("animationend", () => {
        lightboxImage.style.animation = ""
        prevImage.style.animation = ""
        nextImage.style.animation = ""
    })
}