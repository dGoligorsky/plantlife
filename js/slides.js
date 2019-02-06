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

// when I put my mouse over the slide area, put all the images in a random place
slideArea.addEventListener("mouseover", function(){
    images.forEach(image => {
        // random, no snapping
        // const x = 100 * Math.random() - 50
        // const y = 100 * Math.random() - 50

        // snap to 25px grid version
        const x = 25 * (Math.floor(Math.random() *5)) - 50
        const y = 25 * (Math.floor(Math.random() *5)) - 50

        image.style.transform = `translate(${x}px, ${y}px)`
    })
})

// when I move my mouse away, put the images back 
slideArea.addEventListener("mouseout", function() {
    images.forEach(image => {
        image.style.transform = ""
    })
})