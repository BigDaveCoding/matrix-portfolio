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
    const pill_parent_div = document.querySelector('.pill_parent_div')

    let red_pill_bool = false
    let blue_pill_bool = false

    const its_all_lies = document.querySelector('.its_all_lies')
    const error_message = document.querySelector('.error_message')


    const hero_question = document.querySelector('.hero_question')

    const user_options = document.querySelector('.user_options')

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
    // .to(red_pill, {
    //     opacity: 1,
    //     duration: 0.6
    // })
    // .to(blue_pill, {
    //     opacity: 1,
    //     duration: 0.6
    // })
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

    function redPill() {
        const tl = gsap.timeline()
        error_message.classList.add('hidden')

        tl.to(option_one, {
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
        
    }

    const array_of_lies = [
        "I invented Google.",
        "I have 73+ Years experience Coding.",
        "I invented Facebo0k.",
        "I 0wn a Siberian T1ger.",
        "I ca1 r0ad a 539 page b1ok i0 two m01utes.",
        "0 10s se01 11001 10100.",
        "I k#n0w 1o3 la/ng^u@ges flu€ntly.",
        "I 100k 0v#er NASA in 2/*01.",
        "0#10 c0d€ed */ a g@litching m@chine.",
        "C0rru#pt3d! D@ta m1nd://} A1gorith#m.",
        "E#ro12 Co*&de: 1010101010101",
        "Th*&3 s}yst#m: brea#king.",
        "}E*1ror! 10000. */",
        "@@@@@ D@t#a P*0w3r {Gone}!"
    ];

    function bluePill() {
        
        const timeline = gsap.timeline({
            onComplete: () => {
                bluePillTwo()
            }
        })

        array_of_lies.forEach(lie => {
            const span = document.createElement("span")
            its_all_lies.appendChild(span);

            timeline.to(span, {
                text: lie,
                duration: 0.6
            });
        });

    }

    function bluePillTwo() {
        console.log(`blue pill two function`)
        its_all_lies.classList.add('hidden')

        gsap.to(error_message, {
            opacity: 1, 
            duration: 0.2,
            repeat: 9, 
            yoyo: true,
            onComplete: () => {
                console.log(`Flashing completed`);

                user_options.classList.remove('hidden')

                gsap.to(hero_question, {
                    opacity: 1,
                    duration: 0.5
                })

                error_message.classList.add('hidden')

                redPill()
            }
        });
        
    }

    red_pill.addEventListener('click', () => {

        if (!red_pill_bool && !blue_pill_bool) {
            red_pill_bool = true
            blue_pill_bool = false
        }
        
        if (red_pill_bool) {
            const tl = gsap.timeline({
                onComplete: () => {
                    pill_parent_div.classList.add('hidden')
                    redPill()
                }
            })
            
            tl.to(pill_parent_div, {
                opacity: 0,
                duration: 0.4
            })

        }
    })

    blue_pill.addEventListener('click', () => {
        if (!blue_pill_bool && !red_pill_bool) {
            blue_pill_bool = true
            red_pill_bool = true
        }

        if (blue_pill_bool) {
            const tl = gsap.timeline({
                onComplete: () => {
                    pill_parent_div.classList.add('hidden')
                    user_options.classList.add('hidden')
                    bluePill()

                }
            })

            tl.to(pill_parent_div, {
                opacity: 0, 
                duration: 0.4
            })
            tl.to(hero_question, {
                opacity: 0,
                duration: 0.4
            })
        }

    })

    let option_one_bool = false
    let option_two_bool = false
    let option_three_bool = false

    console.log(option_one)

    function adjustOptionDisplay() {

        if (option_one_bool) {
            //set style of option one
            option_one.classList.add('bg-amber-400')
            option_one.classList.add('text-black')
        } else {
            //revert back to original style
            option_one.classList.remove('bg-amber-400')
            option_one.classList.remove('text-black')
        }

        if (option_two_bool) {
            //set style of option two
            option_two.classList.add('bg-amber-400')
            option_two.classList.add('text-black')
        } else {
            //revert back to original style
            option_two.classList.remove('bg-amber-400')
            option_two.classList.remove('text-black')
        }

        if (option_three_bool) {
            //set style of option one
            option_three.classList.add('bg-amber-400')
            option_three.classList.add('text-black')
        } else {
            //revert back to original style
            option_three.classList.remove('bg-amber-400')
            option_three.classList.remove('text-black')
        }


    }

    option_one.addEventListener('click', () => {
        option_one_bool = true
        option_two_bool = false
        option_three_bool = false

        const tl = gsap.timeline({
            onComplete: () => {
                if (about_me_section.classList.contains('hidden')) {
                    adjustOptionDisplay()
                    randomCharColorChange(about_me_intro)
                    about_me_section.classList.remove('hidden')

                    projects_section.classList.add('hidden')
                    contact_section.classList.add('hidden')
                }
            }
        })
        tl.to(section_title, {
            text: 'Learn About Me',
            duration: 0
        })
    })

    option_two.addEventListener('click', () => {
        option_one_bool = false
        option_two_bool = true
        option_three_bool = false

        const tl = gsap.timeline({
            onComplete: () => {
                if (projects_section.classList.contains('hidden')) {
                    adjustOptionDisplay()
                    projects_section.classList.remove('hidden')

                    about_me_section.classList.add('hidden')
                    contact_section.classList.add('hidden')
                }
            }
        })

        tl.to(section_title, {
            text: 'Latest Projects',
            duration: 0
        })
    })

    option_three.addEventListener('click', () => {
        option_one_bool = false
        option_two_bool = false
        option_three_bool = true

        const tl = gsap.timeline({
            onComplete: () => {
                if (contact_section.classList.contains('hidden')) {
                    adjustOptionDisplay()
                    contact_section.classList.remove('hidden')

                    about_me_section.classList.add('hidden')
                    projects_section.classList.add('hidden')
                }
            }
        })

        tl.to(section_title, {
            text: 'Get In Touch!',
            duration: 0
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

    const about_me_intro = document.querySelector('.about_me_intro')
    console.log(about_me_intro)
    console.log(about_me_intro.textContent)

    function generateRandomNumber(x) {
        const r_n = Math.floor(Math.random() * x)
        // console.log(r_n)
        return r_n
    }

    function randomColor(){
        const array_colors = ['text-amber-200', 'text-orange-200', 'text-violet-100']
        const random_index = Math.floor(Math.random() * array_colors.length)
        console.log(array_colors[random_index])
        return array_colors[random_index]
    }

    function turnCharDifferentColor(index_array, section) {
        let text_array = section.textContent.split('')
        let delay = 0

        index_array.forEach(i => {
            setTimeout(() => {
                text_array[i] = `<span class ="${randomColor()}">${text_array[i]}</span>`
                section.innerHTML = text_array.join('')
            }, delay)
            delay += 100
        })
    }

    function revertCharToOriginal(index_array, section) {
        let text_array = section.textContent.split('')

        index_array.forEach(i => {
            text_array[i] = `${text_array[i]}`
        })

        section.innerHTML = text_array.join('')
        
    }

    function randomCharColorChange(section) {
        console.log(section.textContent.length)

        let count = 0
        let char_array = []

        while (count < 25) {
            let rn = generateRandomNumber(section.textContent.length)
            console.log(section.textContent[rn])
            char_array.push(rn)
            count += 1       
        }
        char_array.sort()
        console.log(char_array)
        
        turnCharDifferentColor(char_array, section)

        setTimeout(() => {
            revertCharToOriginal(char_array, section)

        }, 2500)
        

    };

    // randomCharColorChange(about_me_intro)

});