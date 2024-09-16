function openSettings() {
    const settingsDiv = document.getElementsByClassName('settings')[0]
    const targetRect = document.getElementById('gear').getBoundingClientRect()
    const currScroll = window.scrollY

    settingsDiv.style.top = `${targetRect.top + 45 + currScroll}px`
    settingsDiv.style.left = `${targetRect.left - 100}px`

    if (settingsDiv.classList.contains('show')) {
        settingsDiv.classList.remove('show')
    } else {
        settingsDiv.classList.add('show')
    }

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const targetElement = document.querySelector(this.getAttribute('href'))
        const offset = -100

        window.scrollTo({
            top: targetElement.offsetTop + offset,
            behavior: 'smooth'
        })
    })
})

function changeToEng(page) {
    if (page == 'index') {
        window.location.href = './index.html'
    } else if (page == 'about') {
        window.location.href = './aboutMe.html'
    } else if (page == 'portfolio') {
        window.location.href = './portfolio.html'
    }
}

function changeToSpa(page) {
    if (page == 'index') {
        window.location.href = './index_esp.html'
    } else if (page == 'about') {
        window.location.href = './aboutMe_esp.html'
    } else if (page == 'portfolio') {
        window.location.href = './portfolio_esp.html'
    }
}