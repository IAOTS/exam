//Question ba
var questionBank = [{


        main: 'Listening',
        desc: ' Listen. Write the words you hear.',
        audio: '',
        question: 'Is your_____________there?',
        option: [' they\'re', 'there are', ' their', 'they are'],
        answer: 'they are'
    },
    {
        main: 'Listening',
        desc: '',
        audio: '',
        question: ' Where’s the_______________ ?.',
        option: ['on', 'at', 'in', 'next'],
        answer: 'at'
    },
    {
        main: 'Listening',
        desc: '',
        audio: '',
        question: 'Are your_________ here?',
        option: ['And', 'So', 'Also', 'Too'],
        answer: 'So'
    },

    {
        main: 'Listening',
        desc: '',
        audio: '',
        question: 'I have a bad_______________ .',
        option: ['watching', 'watch', ' to watch', 'watched'],
        answer: 'watching'
    },
    {
        main: 'Listening',
        desc: '',
        audio: '',
        question: 'I sprained my__________________.',
        option: [' The most ', 'Almost', 'All', 'Most of'],
        answer: 'Almost'
    },
    {
        main: 'Listening',
        desc: 'Listen. Circle the letter of the sentences you hear.',
        audio: '',
        question: '1',
        option: [' It\’s on the sofa.', 'It\’s under the shelf.', 'It\’s on the shelf', 'excitement'],
        answer: 'excitement'
    },
    {
        main: 'Listening',
        desc: 'Listen. Circle the letter of the sentences you hear.',
        audio: '',
        question: '2',
        option: [' I have a fever.', ' She has the flu.', ' I have the flu.'],
        answer: 'to see'
    },
    {
        main: 'Listening',
        desc: 'Listen. Circle the letter of the sentences you hear.',
        audio: '',
        question: '3',
        option: ['Yes\, she is.', 'Yes\, it is.', 'Yes\, they are.'],
        answer: 'the cheapest'
    },
    {
        main: 'Listening',
        desc: 'Listen. Circle the letter of the sentences you hear.',
        audio: '',
        question: '4',
        option: [' No\, they aren\’t.', 'Yes\, they are.', 'Yes\, we are.'],
        answer: 'the cheapest'
    },
    {
        main: 'Listening',
        desc: 'Listen. Circle the letter of the sentences you hear.',
        audio: '',
        question: '5',
        option: ['He\’s working', 'She\’s working.', 'They\’re working.'],
        answer: 'the cheapest'
    },

    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        audio: '',
        question: '_________he from Russia?',
        option: ['Does', 'Is', ''],
        answer: 'Does'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        audio: '',
        question: ' The maps are______the table.',
        option: ['on', 'in', ''],
        answer: 'on'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        audio: '',
        question: 'Are you_________?',
        option: ['study', 'studying', 'studies'],
        answer: 'studying'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        audio: '',
        question: '_________Mrs. Jones have a backache?',
        option: ['Do', 'Does', 'Did'],

        answer: 'Does'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        audio: '',
        question: ' Go two blocks.____________left.',
        option: ['Turn', 'Turning', 'Turned'],
        answer: 'Turn'
    },
    {
        main: 'Grammar',
        desc: 'Match the questions with the answers',
        audio: '',
        question: 'Where are they from?______',
        option: ['They\'re on the table', 'They\'re from china', 'Yes\,they do.'],
        answer: 'They\'re from china'
    },
    {
        main: 'Grammar',
        desc: 'Match the questions with the answers',
        audio: '',
        question: 'Are they eating?______',
        option: ['They\'re on the table', 'They\'re from china', 'Yes\,they are.'],
        answer: 'Yes\,they are.'
    },
    {
        main: 'Grammar',
        desc: 'where are the erasers?______',
        audio: '',
        question: 'Are they eating?______',
        option: ['They\'re on the table', 'They\'re from china', 'Yes\,they are.'],
        answer: 'They\'re on the table'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var main = document.getElementById('main');
var desc = document.getElementById('desc');
var audio = document.getElementById('song');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var stat = document.querySelector('#stat');
var audio1 = document.getElementById('listening');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {

    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }

    main.innerHTML = '' + questionBank[i].main;
    desc.innerHTML = '' + questionBank[i].desc;
    audio.innerHTML = '' + questionBank[i].audio;
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    if (i === 1) {
        audio1.style.display = "none";
    }
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;

}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;

    }
    setTimeout(nextQuestion, 300);
}
//function to display next question
function nextQuestion() {

    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();

    } else {
        points.innerHTML = score;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }


}

//function to display previous question
function previousQuestion() {
    if (i <= questionBank.length - 1) {
        i = i - 1;
        if (i === 0) {
            audio1.style.display = "block";
        }
        displayQuestion();
    }
}
//click events to previous button
previous.addEventListener('click', previousQuestion);
//click events to next button
next.addEventListener('click', nextQuestion);






displayQuestion();

audio.onclick = function() {
    window.addEventListener("click", function() {

        document.querySelector(".iframe").style.display = "block";
        document.querySelector("#close").style.display = "block";


    });



}
var btn = document.getElementById("close");

btn.onclick = function() {

    window.addEventListener("click", function() {

        document.querySelector(".iframe").style.display = "none";

        document.querySelector("#close").style.display = "none";

    });
}

function send_handle() {

    let num = document.getElementById("number").value;
    let msg = document.getElementById("msg").value;
    let msg1 = document.getElementById("msg1");
    msg = points.innerHTML;
    let name = document.getElementById("name").value;
    if (name == "") {
        msg1.innerHTML = "لا يمكنك ترك الاسم فارغا";
        parent.location = "index1A.html?#scorecard";
    } else {
        var win = open(`https://wa.me/${num}?text=أنا الطالب : ${name}%20كود الإختبار هو :9582${msg}_IAOTS`, 'self');
        // win.focus();
    }
}

window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
}

var sec = 3600,
    countDiv = document.getElementById("timer"),
    secpass,
    countDown = setInterval(function() {
        'use strict';

        secpass();
    }, 1000);

function secpass() {
    'use strict';

    var min = Math.floor(sec / 60),
        remSec = sec % 60;

    if (remSec < 10) {

        remSec = '0' + remSec;

    }
    if (min < 10) {

        min = '0' + min;

    }
    countDiv.innerHTML = min + ":" + remSec;

    if (sec > 0) {

        sec = sec - 1;

    } else {

        clearInterval(countDown);

        countDiv.innerHTML = 'countdown done';

    }
}
