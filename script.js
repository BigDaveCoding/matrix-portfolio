"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // gsap code here!
    const page_title = document.querySelector('.title')
    const hero_info = document.querySelector('.hero_info')
    const hero_question = document.querySelector('.hero_question')

    gsap.to(page_title, {
        text: 'Welcome...',
        duration: 2
    });

    gsap.to(hero_info, {
        opacity: 1,
        duration: 1,
    })

    gsap.to(hero_question, {
        text: "Please select an option",
        duration: 2
    })

   });