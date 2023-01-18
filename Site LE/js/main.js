const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const text = document.querySelectorAll('p');
text.forEach((el) => observer.observe(el)); 


const elements = document.querySelectorAll('h1');
elements.forEach((el) => observer.observe(el));

let right = document.querySelector(".right");
let left = document.querySelector(".left");
let idk = document.querySelector(".idk");

right.addEventListener("click", function() {
    let current = document.querySelector('.nothidden');
    current.classList.remove("nothidden");
    current.classList.add("hidden");
    left.classList.remove("hidden");

    let next = current.nextElementSibling;

    let last = idk.lastElementChild;
    if(next === last){
        right.classList.add("hidden");
        left.classList.remove("hidden");
    }

    next.classList.remove("hidden");
    next.classList.add("nothidden");
});

left.addEventListener("click", function() {
    let current = document.querySelector('.nothidden');
    current.classList.remove("nothidden");
    current.classList.add("hidden");
    right.classList.remove("hidden");

    let previous = current.previousElementSibling;

    let first = idk.firstElementChild;
    if(previous === first){
        left.classList.add("hidden");
        right.classList.remove("hidden");
    }

    previous.classList.remove("hidden");
    previous.classList.add("nothidden");
});


