"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // gsap code here!
    const header_text = document.querySelector('.header_text')

    const hero_top_border = document.querySelector('.hero_top_border')
    const hero_title = document.querySelector('.hero_title')
    const hero_subtitle = document.querySelector('.hero_subtitle')
    const hero_bottom_border = document.querySelector('.hero_bottom_border')

    const hero_question = document.querySelector('.hero_question')
    const option_one = document.querySelector('.option_one')
    const option_two = document.querySelector('.option_two')
    const option_three = document.querySelector('.option_three')

    
    const section_title = document.querySelector('.section_title')
    console.log(section_title)
    const about_me_section = document.querySelector('.about_me_section')

    const timeline = gsap.timeline()

    timeline.to(header_text, {
        text: `<i class="fa-solid fa-handshake"></i> Welcome!`,
        duration: 1
    })
    .fromTo(hero_top_border, {
        x: 500, 
        opacity: 0
    }, {
        x: 0,
        opacity: 1, 
        duration: 0.4
    })
    .to(hero_title, {
        text: 'My Name Is David.',
        duration: 1.2
    })
    .to(hero_subtitle, {
        text: `I am a software Developer <i class="fa-regular fa-floppy-disk"></i>`,
        duration: 1.2
    })
    .fromTo(hero_bottom_border, {
        x: -500,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.4
    })
    .to(hero_question, {
        text: "Please select an option...",
        duration: 1
    })
    .to(option_one, {
        opacity: 1,
        duration: 0.6
    })
    .to(option_two, {
        opacity: 1,
        duration: 0.6
    })
    .to(option_three, {
        opacity: 1,
        duration: 0.6
    })

    option_one.addEventListener('click', () => {

        const tl = gsap.timeline({
            onComplete: () => {
                if (about_me_section.classList.contains('hidden')) {
                    about_me_section.classList.remove('hidden')
                } else {
                    about_me_section.classList.add('hidden')
                }
            }
        })

        tl.to(section_title, {
            text: 'Learn About Me',
            duration: 0.6
        })
    })
});