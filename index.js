// observer functionality
const observerHandler = (entries, observer) => {
    const activeUnderline = Array.from(document.querySelectorAll(".underline-indicators > *"))
   entries.forEach((entry) => {
       
       if (entry.isIntersecting && entry.target.id === "products"){
           entry.target.classList.add("slideUp")
           activeUnderline.map(el=> el.innerText.includes("GOODIES") ? el.classList.add("active") : el.classList.remove("active"))


       }
       else if (entry.isIntersecting && entry.target.id === "science"){
        entry.target.classList.add("slideUp")
        document.querySelector(".primary-navigation").classList.add("addBackdrop")
        activeUnderline.map(el=> el.innerText.includes("SCIENCE") ? el.classList.add("active") : el.classList.remove("active"))
        

       }
       else if (entry.isIntersecting && entry.target.id === "opt1"){
        entry.target.classList.add("slideInRight")
        

       }
       else if (entry.isIntersecting && entry.target.id === "opt2"){
        entry.target.classList.add("slideInLeft")
        

       }
       else if (entry.isIntersecting && entry.target.id === "header-science"){
        document.getElementById("p-science").classList.add("fadeIn")
        

       }
       else if (entry.isIntersecting && entry.target.id === "header-products"){
        document.getElementById("p-products").classList.add("fadeIn")
        

       }
       else if (entry.isIntersecting && entry.target.id === "home"){
        document.querySelector(".primary-navigation").classList.remove("addBackdrop")

        activeUnderline.map(el=> el.innerText.includes("HOME") ? el.classList.add("active") : el.classList.remove("active"))
        
       }
   });

} 

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
}

const observer = new IntersectionObserver(observerHandler, options)

const targets = [document.getElementById("products"), document.getElementById("science"), document.getElementById("home"), document.getElementById("opt1"), document.getElementById("opt2"), document.getElementById("header-science"), document.getElementById("header-products")]
targets.map(target=> observer.observe(target))

// hamburger functionality
const wrapper = document.querySelector(".hamburger-wrapper")
const menu = document.querySelector(".menu")
const hamlinks = Array.from(document.querySelectorAll(".hamlink"))
wrapper.addEventListener('click', function(){
    wrapper.classList.toggle("clicked")
    menu.classList.toggle("open")
    hamlinks.map(el=> el.classList.toggle("fadeText"))
})
menu.addEventListener('click', function(e){
    wrapper.classList.remove("clicked")

    menu.classList.remove("open")
})


// carousel functionality

const carouselItems = Array.from(document.querySelectorAll(".carousel"))

const liItems = document.querySelector(".testimonial")

liItems.addEventListener('click', function(e){
    console.log(e.target.innerText)
    // console.log(Array.from(liItems.children))
    carouselItems.map(item=>item.dataset.attribute.toUpperCase() === e.target.innerText ? item.style.transform = "translateX(0)" :item.style.transform =  "translateX(200%)")
    Array.from(liItems.children).map(el=> el.innerText===e.target.innerText ? el.classList.add("active") : el.classList.remove("active"))
})

// add call to action btn
const carouselHeight = carouselItems[0].clientHeight
const ctaBtn = document.querySelector(".call-to-action")
console.log(carouselHeight)
ctaBtn.style.marginTop = `${carouselHeight}px`