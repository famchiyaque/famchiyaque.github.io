function toggleInterests(key) {
    const sportDiv = document.getElementById('int-sport')
    const litDiv = document.getElementById('int-lit')
    const cookDiv = document.getElementById('int-cook')
    if (key == "sports") {
        litDiv.classList.add('hidden')
        cookDiv.classList.add('hidden')
        sportDiv.classList.remove('hidden')
    } else if (key == "lit") {
        sportDiv.classList.add('hidden')
        cookDiv.classList.add('hidden')
        litDiv.classList.remove('hidden')
    } else if (key == "cook") {
        litDiv.classList.add('hidden')
        sportDiv.classList.add('hidden')
        cookDiv.classList.remove('hidden')
    }
}

function index() {
    console.log('here')
    const sideNav = document.getElementsByClassName('sidenav')[0]
    let bodySections = document.getElementsByTagName('section')
    if (sideNav.classList.contains('hidden')) {
        sideNav.classList.remove('hidden')
        for (let i = 0; i < bodySections.length; i++) {
            bodySections[i].style.width = '84vw';
        }
    } else {
        sideNav.classList.add('hidden')
        for (let i = 0; i < bodySections.length; i++) {
            bodySections[i].style.width = '100%';
        }
    }
}

let scrolled = false;

document.addEventListener('scroll', function() {
    if (!scrolled && window.scrollY >= 600) {
        console.log("entered the function")
        const pixels = window.innerHeight * 1.3
        window.scrollTo({
            top: pixels,      
            behavior: 'smooth' 
        })
        const contactsFlexIcons = document.getElementsByClassName('aboutIcon')
        console.log(contactsFlexIcons)
        for (let i = 0; i < contactsFlexIcons.length; i++) {
            const currIcon = contactsFlexIcons[i]
            setTimeout(() => {
                if (currIcon.querySelector('svg')) {
                    const svg = currIcon.querySelector('svg')
                    svg.classList.add('biz-i-scrolled')
                } else {
                    currIcon.classList.add("scrolled")
                }
            }, i * 300)
        }
        
        for (let i = 0; i < contactsFlexIcons.length; i++) {
            setTimeout(() => {
                const currIcon = contactsFlexIcons[i]
                if (currIcon.querySelector('svg')) {
                    const svg = currIcon.querySelector('svg')
                    svg.classList.remove('biz-i-scrolled')
                } else {
                    currIcon.classList.remove("scrolled")
                }
            }, i * 300 + 1000)
        }

        scrolled = true 
    }
})