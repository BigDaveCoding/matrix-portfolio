"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // gsap code here!
    const page_title = document.querySelector('.title')
    const hero_info = document.querySelector('.hero_info')
    const hero_question = document.querySelector('.hero_question')
    const option_one = document.querySelector('.option_one')
    const option_two = document.querySelector('.option_two')
    const option_three = document.querySelector('.option_three')

    const timeline = gsap.timeline()

    timeline.to(page_title, {
        text: `<i class="fa-solid fa-handshake"></i> Welcome!`,
        duration: 1.2
    })
    .to(hero_info, {
        opacity: 1,
        duration: 1.2,
    })
    .to(hero_question, {
        text: "Please select an option...",
        duration: 1.2
    })
    .to(option_one, {
        opacity: 1,
        duration: 0.7
    })
    .to(option_two, {
        opacity: 1,
        duration: 0.7
    })
    .to(option_three, {
        opacity: 1,
        duration: 0.7
    })

});