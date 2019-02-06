// pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// we want to keep track of two things
let currentSlide = 0
let z = 1

// when I click the slides area, change the slide based on z-index
slideArea.addEventListener("click", function() {
    currentSlide = currentSlide + 1

    if(currentSlide > images.length - 1){
        currentSlide = 1
    }

    z = z + 1

    // remove the animation from the style for every image so when looped, JS will add the animation again
    images.forEach(image => {
        image.style.animation = ""
    })

    // pick the right image
    images[currentSlide].style.zIndex = z
    images[currentSlide].style.animation = "fade 0.5s"

})