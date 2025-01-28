"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // gsap code here!
    const page_title = document.querySelector('.title')

    gsap.to(page_title, {
        text: 'Welcome...',
        duration: 2
    });

   });