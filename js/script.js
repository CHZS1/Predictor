

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
    let answer = document.querySelector(".answer-show");
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


//sound
let night = document.querySelector(".night");
let soundNight = "upload/ha_ha_ha.mp3";

night.addEventListener('click',
    function () {
        let audioNight = new Audio(soundNight);
        audioNight.play();
    }
);


let evening = document.querySelector(".evening");
let soundEvening = "upload/Ow.mp3";

evening.addEventListener('click',
    function () {
        let audioEvening = new Audio(soundEvening);
        audioEvening.play();
    }
);

let day = document.querySelector(".day");
let soundDay = "upload/dzyn.mp3";

day.addEventListener('click', 
    function () {
        let audioDay = new Audio(soundDay);
        audioDay.play();
    }
)



