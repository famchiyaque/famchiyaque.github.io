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

const resumeBtn = document.querySelector('#resume-btn')
const engBtn = document.querySelector('.eng-btn')
const spaBtn = document.querySelector('.spa-btn')

resumeBtn.addEventListener('mouseenter', function() {
    console.log("entered mouseenter for resume btn")
    const targetRect = resumeBtn.getBoundingClientRect()
    const currScroll = window.scrollY

    engBtn.style.position = 'absolute'
    engBtn.style.top = `${targetRect.top + currScroll}px`
    engBtn.style.left = `${targetRect.left}px`
    engBtn.style.width = `${targetRect.width}px`
    engBtn.style.height = `${targetRect.height}px`
    // engBtn.style.display = "block"
    if (engBtn.classList.contains('dissolve')) {
        engBtn.classList.remove('dissolve')
    }

    spaBtn.style.position = 'absolute'
    spaBtn.style.top = `${targetRect.top + currScroll}px`
    spaBtn.style.left = `${targetRect.left}px`
    spaBtn.style.width = `${targetRect.width}px`
    spaBtn.style.height = `${targetRect.height}px`
    // spaBtn.style.display = "block"
    if (spaBtn.classList.contains('dissolve')) {
        spaBtn.classList.remove('dissolve')
    }

    engBtn.classList.add('show-spa')
    spaBtn.classList.add('show-eng')
})

const buttons = [resumeBtn, engBtn, spaBtn];

buttons.forEach(btn => {
    btn.addEventListener('mouseleave', checkMouseLeave)
    btn.addEventListener('mouseenter', () => clearTimeout(hideTimeout))
})

let hideTimeout

function checkMouseLeave() {
    hideTimeout = setTimeout(() => {
        if (![...buttons].some(btn => btn.matches(':hover'))) {
            engBtn.classList.add('dissolve')
            spaBtn.classList.add('dissolve')
        }
    }, 1200)
}