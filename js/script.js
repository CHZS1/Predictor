//we difine answers

let answers = ["Зуб даю!", "Это точно так:)", "Без сомненья",
    "Да, верняк:)", "Забей!", "Как я вижу, да", 
    "Скорей всего", "Выглядит хорошо", "Дааа!", "Знаки говорят Да",
    "Хрен его знает)", "Спроси еще раз позже", "Сейчас не скажу)",
    "Не могу предсказать сейчас", "Повтори еще разочек пжст", "Не расчитывай на это",
    "Мой ответ нет", "Хтыщььь!", "Выглядит не так хорошо", "Очень сомнительно"
]
// 11th string has to be considered again ()
window.onload = function () {
    let eight = document.querySelector(".eight");
    let answer = document.querySelector(".answer__display");
    let eightball = document.querySelector(".eight-ball")
    let question = document.querySelector(".question");

    eightball.addEventListener("click", function () {
        if (question.value.length < 1) {
            alert('Введите вопрос !');
        } else {
            eight.innerText = "";
            let num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
        }
    });
};

let soundBall = document.querySelector(".sound-ball");
let sound = "upload/sound-effect-11.mp3";


soundBall.addEventListener('click',
    function () {
        let audio = new Audio(sound);
        audio.play();
});

//header accordion

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//sound

let manSound = document.querySelector(".switch__item--man");
let soundHaha = "upload/ha_ha_ha.mp3";

manSound.addEventListener('click',
    function () {
        let audioMan = new Audio(soundHaha);
        audioMan.play();
    }
);


let womanSound = document.querySelector(".switch__item--woman");
let soundOw = "upload/Ow.mp3";

womanSound.addEventListener('click',
    function () {
        let audioWoman = new Audio(soundOw);
        audioWoman.play();
    }
);


//burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');

    })

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop-scroll');
    })
});