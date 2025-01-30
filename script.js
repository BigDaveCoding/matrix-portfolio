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

    const user_options = document.querySelector('.user_options')

    const option_one = document.querySelector('.option_one')
    const option_two = document.querySelector('.option_two')
    const option_three = document.querySelector('.option_three')

    
    const section_title = document.querySelector('.section_title')

    const about_me_section = document.querySelector('.about_me_section')
    const projects_section = document.querySelector('.projects_section')
    const contact_section = document.querySelector('.contact_section')

    const about_me_intro = document.querySelector('.about_me_intro')
    const fun_facts = document.querySelectorAll('.fun_facts')

    const timeline = gsap.timeline()

    // This timeline runs through the opening animations of the webpage.
    // Creates a timeline using gsap.timeline()
    // Targets each variable in vertical order and applies an animation to it.
    // Using .to and .fromTo
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

    // These Bools will be used to control the display of 'options'
    // Depending on which is true, it will trigger a function
    let option_one_bool = false
    let option_two_bool = false
    let option_three_bool = false

    // console.log(option_one)

    // This function uses if/else statements, checking the value of bools
    // Depending on which bools are true/false...
    // It will change the display of the selected option
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

    // Event Listeners which set the values of option bools,
    // create a GSAP timeline,
    // Within the gsap timeline they change the text of section_title
    // and On completion of the timeline, run functions, add and remove classLists
    option_one.addEventListener('click', () => {
        option_one_bool = true
        option_two_bool = false
        option_three_bool = false

        const tl = gsap.timeline({
            onComplete: () => {
                if (about_me_section.classList.contains('hidden')) {
                    adjustOptionDisplay()
                    randomCharColorChange(about_me_intro)
                    fun_facts.forEach(fun_fact => {
                        randomCharColorChange(fun_fact)
                    })
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


    // Decalring variables for points of contact on HTML page
    // Will be used within 'fetch'
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

    // Fecthing data from a local .json file which includes information about various projects
    // Assigning that data to the decalred variables above
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


    // Function that returns a random number between 0 and argument 'x'
    function generateRandomNumber(x) {
        const r_n = Math.floor(Math.random() * x)
        // console.log(r_n)
        return r_n
    }

    //Function to return a random color from an array of predefined colors
    function randomColor(){
        const array_colors = ['text-amber-200', 'text-orange-200', 'text-violet-100']
        const random_index = Math.floor(Math.random() * array_colors.length)
        // console.log(array_colors[random_index])
        return array_colors[random_index]
    }

    // Function that takes an array of index and the section that array has come from
    // To be used within randomCharColorChange Function.
    // For example [1,23,432,99], about_me_intro
    // Chnages the given section into an array of characters using .split()
    // For each value in index array,
    // Changes the color of the character at that index in the text array
    // Reverts back to its original state using .replace and regular expressions
    function turnCharDifferentColor(index_array, section) {
        let text_array = section.textContent.split('')
        let delay = 0

        index_array.forEach(i => {
            // Change the color of the character and set a timeout for reverting it back
            setTimeout(() => {
                text_array[i] = `<span class ="${randomColor()}">${text_array[i]}</span>`;
                section.innerHTML = text_array.join('');
    
                setTimeout(() => {
                    text_array[i] = text_array[i].replace(/<span[^>]*>([^<]*)<\/span>/, '$1');
                    section.innerHTML = text_array.join('');
                }, 500); 

            }, delay);
    
            delay += 100;
        });
    }

    // Function to control the color change of random characters within a section of textContent
    // pass in the section as a variable
    // while loop generates random number using generateRandomNumber()
    // stores numbers in a array to use in turnCharDifferentColor()
    // Pass in array and the section passed into this function into turnCharDifferenColor()
    function randomCharColorChange(section) {
        // console.log(section.textContent.length)

        let count = 0
        let char_array = []

        while (count < 15) {
            let rn = generateRandomNumber(section.textContent.length)
            // console.log(section.textContent[rn])
            char_array.push(rn)
            count += 1       
        }
        char_array.sort()
        // console.log(char_array)
        
        turnCharDifferentColor(char_array, section)

    };

});