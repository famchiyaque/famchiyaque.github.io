function toggleWork(key) {
    console.log(key)
    const schoolDiv = document.getElementById('school')
    const acmDiv = document.getElementById('programming')
    const personalDiv = document.getElementById('personal')
    const schoolTab = document.getElementById('school-tab')
    const progTab = document.getElementById('prog-tab')
    const persTab = document.getElementById('pers-tab')
    if (key == "school") {
        acmDiv.classList.add('hidden')
        personalDiv.classList.add('hidden')
        schoolDiv.classList.remove('hidden')
        progTab.classList.remove('active')
        persTab.classList.remove('active')
        schoolTab.classList.add('active')
    } else if (key == "programming") {
        console.log("inside prog else if")
        schoolDiv.classList.add('hidden')
        personalDiv.classList.add('hidden')
        acmDiv.classList.remove('hidden')
        progTab.classList.add('active')
        persTab.classList.remove('active')
        schoolTab.classList.remove('active')
    } else if (key == "personal") {
        acmDiv.classList.add('hidden')
        schoolDiv.classList.add('hidden')
        personalDiv.classList.remove('hidden')
        progTab.classList.remove('active')
        persTab.classList.add('active')
        schoolTab.classList.remove('active')
    }
}