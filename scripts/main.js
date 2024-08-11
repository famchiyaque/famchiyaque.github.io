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
    const profileImg = document.getElementById('profile-img')
    const profileName = document.querySelector('.profile-name')
    const profileDesc = document.querySelector('.profile-desc')

    setTimeout(() => {
        profileImg.classList.add('profile-img-show')
        profileName.classList.add('profile-show')
        profileDesc.classList.add('profile-show')
    }, 500)

    const toast = document.querySelector('.toast')
    const gear = document.getElementById('gear')
    const viewportWidth = window.innerWidth
    const leftPx = viewportWidth * 0.25 - 20
  
    const targetRect = gear.getBoundingClientRect()
  
    toast.style.top = `${targetRect.top + 45}px`
    toast.style.left =  `${targetRect.left - leftPx}px`

    setTimeout(() => {
        toast.classList.add('show')
      }, 1200)

    const contactBtn = document.getElementById('contact-btn')
    const experienceBtn = document.getElementById('exper-btn')
    const resumeBtn = document.getElementById('resume-btn')
    setTimeout(() => {
        contactBtn.classList.add('btn-effect')
    }, 1500)
    setTimeout(() => {
        experienceBtn.classList.add('btn-effect')
    }, 1800)
    setTimeout(() => {
        resumeBtn.classList.add('btn-effect')
    }, 2100)
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