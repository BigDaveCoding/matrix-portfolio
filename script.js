"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin)
    // gsap code here!
    const header_text = document.querySelector('.header_text')

    const hero_top_border = document.querySelector('.hero_top_border')
    const hero_title = document.querySelector('.hero_title')
    const hero_subtitle = document.querySelector('.hero_subtitle')
    const hero_bottom_border = document.querySelector('.hero_bottom_border')

    const red_pill = document.querySelector('.red_pill')
    const blue_pill = document.querySelector('.blue_pill') 

    const red_pill_bool = false
    const blue_pill_bool = false


    const hero_question = document.querySelector('.hero_question')
    const option_one = document.querySelector('.option_one')
    const option_two = document.querySelector('.option_two')
    const option_three = document.querySelector('.option_three')

    
    const section_title = document.querySelector('.section_title')

    const about_me_section = document.querySelector('.about_me_section')
    const projects_section = document.querySelector('.projects_section')
    const contact_section = document.querySelector('.contact_section')

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
    .to(red_pill, {
        opacity: 1,
        duration: 0.6
    })
    .to(blue_pill, {
        opacity: 1,
        duration: 0.6
    })
    // .to(option_one, {
    //     opacity: 1,
    //     duration: 0.6
    // })
    // .to(option_two, {
    //     opacity: 1,
    //     duration: 0.6
    // })
    // .to(option_three, {
    //     opacity: 1,
    //     duration: 0.6
    // })

    red_pill.addEventListener('click', () => {

    })

    option_one.addEventListener('click', () => {

        const tl = gsap.timeline({
            onComplete: () => {
                if (about_me_section.classList.contains('hidden')) {
                    about_me_section.classList.remove('hidden')

                    projects_section.classList.add('hidden')
                    contact_section.classList.add('hidden')
                }
            }
        })
        tl.to(section_title, {
            text: 'Learn About Me',
            duration: 1
        })
    })

    option_two.addEventListener('click', () => {

        const tl = gsap.timeline({
            onComplete: () => {
                if (projects_section.classList.contains('hidden')) {
                    projects_section.classList.remove('hidden')

                    about_me_section.classList.add('hidden')
                    contact_section.classList.add('hidden')
                }
            }
        })

        tl.to(section_title, {
            text: 'Latest Projects',
            duration: 1
        })
    })

    option_three.addEventListener('click', () => {

        const tl = gsap.timeline({
            onComplete: () => {
                if (contact_section.classList.contains('hidden')) {
                    contact_section.classList.remove('hidden')

                    about_me_section.classList.add('hidden')
                    projects_section.classList.add('hidden')
                }
            }
        })

        tl.to(section_title, {
            text: 'Get In Touch!',
            duration: 1
        })
    })


    const project_one = document.querySelector('.project_one') 
    const project_one_title = document.querySelector('.project_one_title')
    const project_one_img = document.querySelector('.project_one_img')
    const project_one_desc = document.querySelector('.project_one_desc')
    const project_one_skills = document.querySelector('.project_one_skills')

    const project_two = document.querySelector('.project_two') 
    const project_two_title = document.querySelector('.project_two_title')
    const project_two_img = document.querySelector('.project_two_img')
    const project_two_desc = document.querySelector('.project_two_desc')
    const project_two_skills = document.querySelector('.project_two_skills')

    const project_three = document.querySelector('.project_three') 
    const project_three_title = document.querySelector('.project_three_title')
    const project_three_img = document.querySelector('.project_three_img')
    const project_three_desc = document.querySelector('.project_three_desc')
    const project_three_skills = document.querySelector('.project_three_skills')

    fetch('./json/info.json')
        .then(response => response.json())
        .then((data) => {
            console.log(data)

            project_one_title.textContent = data.project_one.name
            project_one_img.src = data.project_one.image
            project_one_desc.textContent = data.project_one.about
            data.project_one.skills.forEach(skill => {
                const span = document.createElement("span")
                span.textContent = `#${skill} ` 
                project_one_skills.appendChild(span)
            });

            project_two_title.textContent = data.project_two.name
            project_two_img.src = data.project_two.image
            project_two_desc.textContent = data.project_two.about
            data.project_two.skills.forEach(skill => {
                const span = document.createElement("span")
                span.textContent = `#${skill} ` 
                project_two_skills.appendChild(span)
            });

            project_three_title.textContent = data.project_three.name
            project_three_img.src = data.project_three.image
            project_three_desc.textContent = data.project_three.about
            data.project_three.skills.forEach(skill => {
                const span = document.createElement("span")
                span.textContent = `#${skill} ` 
                project_three_skills.appendChild(span)
            });

            

        })


});