// ------------------------------
// 1. navbar
// 2. typing effect
// 3. progress bar
// 4. full screen
// 5. scroll reveal
// 6. remove reveal
// 7. preloader
// ------------------------------

// ------------------------------
// 1. navbar
// ------------------------------
const toggleButton = document.getElementById("navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");

function navToggle() {
    navbarLinks.forEach((item) => item.classList.toggle('active'));
}

toggleButton.addEventListener("click", navToggle);
navbarLinks.forEach((item) => item.addEventListener('click', navToggle));

// ------------------------------
// 2. typing effect
// ------------------------------
let i = 0, op = 0, delay = "####################", text = "Student" + delay;
const profession = document.getElementById("typing");
profession.innerHTML = ""; // to avoid website reloading problem

function typeWriter() {
    if(i < text.length) {
        if(text.charAt(i) != "#")
            profession.innerHTML += text.charAt(i);
        i++;
    }
    else {
        profession.innerHTML = "";
        i = 0;
        op++;
        if(op == 0)
            text = "Student" + delay;
        else if(op == 1)
            text = "Developer" + delay;
        else if(op == 2)
            text = "Programmer" + delay;
        else {
            text = "Student" + delay;
            op = 0;
        }
    }
}

setInterval(typeWriter, 100);

// ------------------------------
// 3. progress bar
// ------------------------------
const webpercent = [90, 80, 80, 75, 75];
const progpercent = [90, 90, 80, 80];
const skills = document.querySelectorAll(".skills");
const webbars = document.querySelectorAll(".webdev .bar");
const progbars = document.querySelectorAll(".programming .bar");

function webProgress() {
    for(let i=0; i<webbars.length; i++) {
        let currentWidth = 0;
        let id = setInterval(frame, 30);
        function frame() {
            if(currentWidth >= webpercent[i])
                clearInterval(id);
            else {
                currentWidth++;
                webbars[i].style.width = currentWidth + "%";
                webbars[i].innerHTML = currentWidth + "%";
            }
        }
    }
}
function progProgress() {
    for(let i=0; i<progbars.length; i++) {
        let currentWidth = 0;
        let id = setInterval(frame, 30);
        function frame() {
            if(currentWidth >= progpercent[i])
                clearInterval(id);
            else {
                currentWidth++;
                progbars[i].style.width = currentWidth + "%";
                progbars[i].innerHTML = currentWidth + "%";
            }
        }
    }
}

let webFlag = 0, progFlag = 0;
function progress() {
    let webTop = skills[0].getBoundingClientRect().top;
    // if webdev top reaches 150px from bottom (only once)
    if(webTop < innerHeight - 150 && webFlag == 0) {
        webProgress();
        webFlag = 1;
    }
    let progTop = skills[1].getBoundingClientRect().top;
    // if programming top reaches 150px from bottom (only once)
    if(progTop < innerHeight - 150 && progFlag == 0) {
        progProgress();
        progFlag = 1;
    }
}

window.addEventListener("scroll", progress);

// ------------------------------
// 4. full screen
// ------------------------------
function fullScreen(item) {
    if(item.requestFullscreen)
        item.requestFullscreen();
}

// ------------------------------
// 5. scroll reveal
// ------------------------------
const revealFirst = document.querySelectorAll(".reveal-first");
const revealFinal = document.querySelector(".reveal-final");
const windowHeight = window.innerHeight;

function reveal() {
    revealFirst.forEach((item) => {
        let revealFirstTop = item.getBoundingClientRect().top;
        // if next item's top reaches 150px from bottom
        if(revealFirstTop < windowHeight - 150)
            item.classList.add("reveal-active");
    });

    let revealFinalTop = revealFinal.getBoundingClientRect().top;
    // if final item's top reaches 120px from bottom
    if(revealFinalTop < windowHeight - 120)
        revealFinal.classList.add("reveal-active");
}

window.addEventListener("scroll", reveal);

// ------------------------------
// 6. remove reveal
// ------------------------------
function removeReveal() {
    revealFirst.forEach((item) => item.classList.remove("reveal-first"));
}

navbarLinks.forEach((item) => item.addEventListener("click", removeReveal));

// ------------------------------
// 7. preloader
// ------------------------------
const preloader = document.querySelector(".preloader");

function hidePreloader() {
    preloader.classList.add("preloader-hide");
}