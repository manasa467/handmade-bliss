/*==========================================
        MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/*==========================================
    CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*==========================================
        STICKY NAVBAR
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.padding = "12px 8%";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";
        navbar.style.background = "rgba(255,255,255,.95)";

    }

    else {

        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.05)";
        navbar.style.background = "rgba(255,255,255,.75)";

    }

});


/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==========================================
    SCROLL REVEAL ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(

    ".about,.collections,.reviews,.custom-order,.collection-card,.review-card,.highlight-card"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/*==========================================
        REVIEW AUTO SLIDER
==========================================*/

const reviews = document.querySelectorAll(".review-card");

let currentReview = 0;

function showReview() {

    reviews.forEach((review, index) => {

        review.style.opacity = "0.4";
        review.style.transform = "scale(.95)";

        if (index === currentReview) {

            review.style.opacity = "1";
            review.style.transform = "scale(1)";

        }

    });

    currentReview++;

    if (currentReview >= reviews.length) {

        currentReview = 0;

    }

}

if (reviews.length > 0) {

    showReview();

    setInterval(showReview, 3000);

}


/*==========================================
    FLOATING ANIMATION
==========================================*/

const floating = document.querySelectorAll(".floating");

window.addEventListener("mousemove", (e) => {

    floating.forEach((item, index) => {

        const speed = (index + 1) * 0.008;

        const x = (window.innerWidth - e.pageX) * speed;

        const y = (window.innerHeight - e.pageY) * speed;

        item.style.transform = `translate(${x}px,${y}px)`;

    });

});


/*==========================================
        BACK TO TOP BUTTON
==========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("showTop");

    }

    else {

        topBtn.classList.remove("showTop");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*======================================
CATEGORY SWITCHING
======================================*/

function showCategory(category) {

    document.querySelectorAll(".product-section")

        .forEach(section => {

            section.classList.remove("active-category");

        });

    document.getElementById(category)

        .classList.add("active-category");



    document.querySelectorAll(".category-btn")

        .forEach(button => {

            button.classList.remove("active");

        });

    event.target.classList.add("active");

}

/*==========================================
        CURRENT YEAR
==========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


console.log("🌸 Handmade Bliss Website Loaded Successfully!");

const contactForm = document.getElementById("contactForm");

let contactMessage = "";

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("input[type='text']").value;

        const email = document.querySelector("input[type='email']").value;

        const message = document.querySelector("textarea").value;

        contactMessage = `Hi Handmade Bliss! 🌸

My Name: ${name}

Email: ${email}

Message:

${message}

Looking forward to hearing from you. 💖`;

        navigator.clipboard.writeText(contactMessage);

        document.getElementById("contactPopup").style.display = "flex";

    });

}
function sendToInstagram() {

    window.open(

        "https://www.instagram.com/_handmade_._bliss/",

        "_blank"

    );

    closeContactPopup();

}

function closeContactPopup() {

    document.getElementById("contactPopup").style.display = "none";

}