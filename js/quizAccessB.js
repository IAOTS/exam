

//Question ba
var questionBank = [{


        main: 'Listening',
        desc: 'Listen. Circle the letter of the words you hear.',
        question: 'Listening(1)',
        option: ['7:20', '11:30', '10:30'],
        answer: '11:30'
    },
    {
        main: 'Listening',
        desc: 'Listen. Circle the letter of the words you hear.',
        question: 'Listening(2)',
        option: ['$15.99', '$16.95', '$50.99'],
        answer: '$50.99'
    },
    {
        main: 'Listening',
        desc: 'Listen. Circle the letter of the words you hear.',
        question: 'Listening(3)',
        option: ['eating', 'meat', 'eggs'],
        answer: 'meat'
    },

    {
        main: 'Listening',      
        desc: 'Listen. Circle the letter of the words you hear.',
        question: 'Listening(4)',
        option: ['carpenter', 'electrician', 'construction worker'],
        answer: 'electrician'
    },
                        {
        main: 'Listening',      
        desc: 'Listen. Circle the letter of the words you hear.',
        question: 'Listening(5)',
        option: ['camping', 'hiking', 'biking'],
        answer: 'camping'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'We have a vacation ____________________  December.',
        option: ['in', 'on', 'at'],
        answer: 'in'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: '____________________  there any bottles of water?',
        option: ['Are', 'Is', 'Am'],
        answer: 'Are'

    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'What ____________________ she do in the afternoon?',
        option: ['do', 'does', 'are'],
        answer: 'does'

    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'They ____________________ teachers before.',
        option: ['was', 'were', 'is'],
        answer: 'were'

    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: '____________________ going to go to a party tomorrow.',
        option: ['We', 'We\'re', 'We is'],
        answer: 'We\'re'

    },

    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'Now she ___________ a nurse.',
        option: ['is', 'was', 'are'],
        answer: 'is'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'Now they ___________ electricians.',
        option: ['is', 'was', 'are'],
        answer: 'are'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'They ___________ students before. ',
        option: ['were', 'was', 'are'],
        answer: 'were'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'He ___________ a construction worker before.',
        option: ['were', 'was', 'are'],
        answer: 'was'
    },

    {
        main: 'Grammar',
        desc: 'Choose the correct word.',
        question: 'Now he ___________ a teacher.',
        option: ['were', 'is', 'are'],
        answer: 'is'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct verb in the past tense.',
        question: 'Sam ____________________ breakfast this morning.',
        option: [
            'make',
            'makes',
            'made'
        ],
        answer: 'made'
    },
                      {
        main: 'Grammar',
        desc: 'Choose the correct verb in the past tense.',
        question: 'She ____________________ home late last night.',
        option: [
            'get',
            'got',
            'gets'
        ],
        answer: 'got'
    },
                      {
        main: 'Grammar',
        desc: 'Choose the correct verb in the past tense.',
        question: 'He ____________________ the floor last week.',
        option: [
            'sweep',
            'swept',
            'sweeps'
        ],
        answer: 'swept'
    },
                       {
        main: 'Grammar',
        desc: 'Choose the correct verb in the past tense.',
        question: 'Sheila ____________________ the grass yesterday',
        option: [
            'cut',
            'cuts',
            'cutting'
        ],
        answer: 'cut'
    },
                      {
        main: 'Grammar',
        desc: 'Choose the correct verb in the past tense.',
        question: 'They ____________________ the laundry last night.',
        option: [
            'do',
            'doing',
            'did'
        ],
        answer: 'did'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct answers.',
        question: 'Were you a waiter? ______',
        option: [
            'Yes, I was.',
            'I went to a museum.',
            ' I’m going to go swimming.'
        ],
        answer: 'Yes, I was.'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct answers.',
        question: 'What can you do? ______',
        option: [
            'I\’m going to go swimming.',
            'No, I can\’t.',
            'I can use a computer.'
        ],
        answer: 'I can use a computer.'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct answers.',
        question: 'What did you do yesterday? ______',
        option: [
            'I went to a museum.',
            ' I\’m going to go swimming.',
            'No, I can\’t.'
        ],
        answer: 'I went to a museum.'
    },
    {
        main: 'Grammar',
        desc: 'Choose the correct answers.',
        question: 'What are you going to do today? ______',
        option: [
            ' I went to a museum.',
            'I’m going to go swimming.',
            'No, I can\’t.'
        ],
        answer: 'I’m going to go swimming.'
    },
                    
    {
        main: 'Grammar',
        desc: 'Choose the correct answers.',
        question: 'Can you make dinner? ______',
        option: [
            'I went to a museum.',
            ' I\’m going to go swimming.',
            'No, I can\’t.'
        ],
        answer: 'No, I can\’t.'
    },
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var main = document.getElementById('main');
var desc = document.getElementById('desc');

var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var previous = document.querySelector('.previous');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var stat = document.querySelector('#stat');
var AudioA = document.getElementById('listeningA');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {

    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }

    main.innerHTML = '' + questionBank[i].main;
    desc.innerHTML = '' + questionBank[i].desc;
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    if (i === 4) {
        AudioA.style.display = "none";

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
        if (i <= 4) {
            AudioA.style.display = "block";
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
