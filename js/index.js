const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function getGeneration() {
    let userAge = document.querySelector("#user_age").value;
    let generationParagraph = document.querySelector("#generation");

    if (userAge >= 27) {
        generationParagraph.innerHTML = "You are " + userAge + " years old, so your Pokemon will be from the first generation (red & green)";
        getPokeGen1();
    } else if (userAge >= 24) {
        generationParagraph.innerHTML = "You are " + userAge + " years old, so your Pokemon will be from the second generation (gold & silver)";
        getPokeGen2();
    } else if (userAge >= 21) {
        generationParagraph.innerHTML = "You are " + userAge + " years old, so your Pokemon will be from the third generation (ruby & sapphire)";
        getPokeGen3();
    } else if (userAge >= 17) {
        generationParagraph.innerHTML = "You are " + userAge + " years old, so your pokemon will be from the fourth generation (diamond and pearl)";
        getPokeGen4();
    } else {
        generationParagraph.innerHTML = "You are " + userAge + " years old, so your starter will be from the fifth generation (black and white)";
        getPokeGen5();
    }
}

function getResponse() {
    let initial_response = document.querySelector("#user_response").value;
    let response = initial_response.toLowerCase();
    let answerParagraph = document.querySelector("#final_answer");

    if (response == "spring") {
        answerParagraph.innerHTML = "You favor the season of blooming flowers. So your perfect starter is bulbasour!";
    } else if (response == "summer") {
        answerParagraph.innerHTML = "You can handle the heat. So your perfect starter is charmander!";
    } else if (response == "fall") {
        answerParagraph.innerHTML = "Unique choice. So your perfect starter is the unique option, pikachu!";
    } else if (response == "winter") {
        answerParagraph.innerHTML = "Brrrrr! The cold doesn't bother you, so your perfect starter is squirtle!";
    } else if (response == "air") {
        answerParagraph.innerHTML = "Out of the box choice! Your perfect starter will be togepi!";
    } else if (response == "water") {
        answerParagraph.innerHTML = "It's obvious isn't it? Your perfect starter is the water pokemon, totodile!";
    } else if (response == "earth") {
        answerParagraph.innerHTML = "The earth, strong and reliable. Your perfect starter is chikorita!";
    } else if (response == "fire") {
        answerParagraph.innerHTML = "You like to play with fire? Then cyndaquil is the starter for you!";
    } else if (response == "sand dune" || response == "in a sand dune") {
        answerParagraph.innerHTML = "Sand dunes are in the desert, where things are hot. Torchic will be your starter.";
    } else if (response == "sailboat" || response == "on a sailboat") {
        answerParagraph.innerHTML = "At sea the, you and your starter mudkip should feel right at home!";
    } else if (response == "jungle" || response == "in the jungle") {
        answerParagraph.innerHTML = "The jungle is full of life and vegetation, the perfect habitat for you and your starter treecko!";
    }else if (response == "poseidon") {
        answerParagraph.innerHTML = "The god of the seas. Your starter shall be piplup.";
    } else if (response == "hades") {
        answerParagraph.innerHTML = "The god of the underworld. Your starter, chimchar, should be quite comfortable.";
    } else if (response == "zeus") {
        answerParagraph.innerHTML = "The god of the skies and lightning. Shinx shall make a great companion.";
    } else {
        answerParagraph.innerHTML = "Please try again by entering a valid response."
    }
}

function getPokeGen1() {
    let questionParagraph = document.querySelector("#second_question");

    questionParagraph.innerHTML = "Of the 4 seasons, which is your favorite? ";
}

function getPokeGen2() {
    let questionParagraph = document.querySelector("#second_question");

    questionParagraph.innerHTML = "If you were from the movie avatar, which type of bender would you be? ";
}

function getPokeGen3() {
    let questionParagraph = document.querySelector("#second_question");

    questionParagraph.innerHTML = "Where would you rather live? In a sand dune, on a sailboat, or in the jungle? ";
}

function getPokeGen4() {
    let questionParagraph = document.querySelector("#second_question");

    questionParagraph.innerHTML = "Of the 3 sons of the greek god Cronus, with which would you learn from? ";
}

function getPokeGen5() {
    let questionParagraph = document.querySelector("#second_question");

    questionParagraph.innerHTML = "Of the 4 seasons, which is your favorite? ";
}
