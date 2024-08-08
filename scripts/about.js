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