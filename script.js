// Typing Effect

const texts = [

    "Computer Science Student",

    "AI & ML Enthusiast",

    "HPC Learner",

    "Web Developer"

];

let textIndex = 0;

let charIndex = 0;

const typingElement =
document.querySelector(".hero h3");

function typeText(){

    if(charIndex < texts[textIndex].length){

        typingElement.textContent +=

        texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }

    else{

        setTimeout(eraseText,1500);

    }

}

function eraseText(){

    if(charIndex > 0){

        typingElement.textContent =

        texts[textIndex].substring(

            0,

            charIndex-1

        );

        charIndex--;

        setTimeout(eraseText,50);

    }

    else{

        textIndex++;

        if(textIndex >= texts.length){

            textIndex = 0;

        }

        setTimeout(typeText,500);

    }

}


window.onload = () => {

    typeText();

};



// Scroll Reveal Animation

const sections =

document.querySelectorAll("section");

const observer =

new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(

                "show"

            );

        }

    });

},

{

    threshold:0.15

}

);


sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});




// Navbar Background Change

window.addEventListener(

"scroll",

()=>{

    const nav =

    document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.background=

        "rgba(17,24,39,0.95)";

        nav.style.boxShadow=

        "0 5px 20px rgba(0,0,0,.3)";

    }

    else{

        nav.style.background=

        "transparent";

        nav.style.boxShadow=

        "none";

    }

}

);




// Active Navbar Link

const navLinks =

document.querySelectorAll(

"nav ul li a"

);

window.addEventListener(

"scroll",

()=>{

    let current = "";

    sections.forEach(section=>{

        const top =

        window.scrollY;

        const offset =

        section.offsetTop-200;

        const height =

        section.offsetHeight;

        if(

            top >= offset &&

            top < offset+height

        ){

            current =

            section.getAttribute("id");

        }

    });


    navLinks.forEach(link=>{

        link.classList.remove(

            "active"

        );

        if(

            link.getAttribute("href")

            ===

            "#"+current

        ){

            link.classList.add(

                "active"

            );

        }

    });

});




// Counter Animation

const counters =

document.querySelectorAll(

".counter"

);

counters.forEach(counter=>{

    counter.innerText="0";

    const updateCounter=()=>{

        const target=

        +counter.getAttribute(

            "data-target"

        );

        const count=

        +counter.innerText;

        const increment=

        target/100;

        if(count<target){

            counter.innerText=

            Math.ceil(

                count+increment

            );

            setTimeout(

                updateCounter,

                20

            );

        }

        else{

            counter.innerText=

            target;

        }

    };

    updateCounter();

});