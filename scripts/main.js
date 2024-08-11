function openSettings() {
    const settingsDiv = document.getElementsByClassName('settings')[0]
    const targetRect = document.getElementById('gear').getBoundingClientRect()

    settingsDiv.style.top = `${targetRect.top + 45}px`
    settingsDiv.style.left = `${targetRect.left - 100}px`

    if (settingsDiv.classList.contains('show')) {
        settingsDiv.classList.remove('show')
    } else {
        settingsDiv.classList.add('show')
    }

}

window.onload = function() {
    const toast = document.querySelector('.toast')
    const gear = document.getElementById('gear')
    const viewportWidth = window.innerWidth
    const leftPx = viewportWidth * 0.25 - 20
  
    const targetRect = gear.getBoundingClientRect()
  
    toast.style.top = `${targetRect.top + 45}px` // Position it relative to the top of the target
    // toast.style.right = `${targetRect.right - 100}px`
    toast.style.left =  `${targetRect.left - leftPx}px`
    // toast.style.left = `${targetRect.right + 20}px` // Position it to the right of the target, with some spacing
    setTimeout(() => {
        toast.classList.add('show')
      }, 500)
}

function closeToast() {
    const toast = document.querySelector('.toast')
    toast.classList.remove('show')
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