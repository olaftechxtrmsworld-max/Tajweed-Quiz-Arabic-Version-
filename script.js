const parent = document.getElementById("questcontainer")
const header = document.querySelectorAll(".header");
const question = document.getElementById("question");
const welcomeMsg = document.querySelector(".welcome");
const testContainer = document.querySelector(".container");
const options = document.getElementById("anscont");
const nextBtn = document.getElementById("nextbtn");
const viewResult = document.getElementById("view");
const footer = document.getElementById("ft");
const scoreProgress = document.getElementById("score");
const questionProgress = document.getElementById("progress");
const startBtn = document.getElementById("startbtn");
const answer = document.querySelector(".option");
const endScreen = document.getElementById("endscreen");
const score = document.getElementById("scr")
const percentage = document.getElementById("percentage");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart")

const questions = [
    {
        question: "ما الحكم عند التقاء نون ساكنة مع حرف من حروف (ء هـ ع ح غ خ)؟",
        choices: [
            "الإخفاء",
            "الإقلاب",
            "الإظهار الحلقي",
            "الإدغام"
        ],
        answer: "الإظهار الحلقي"
    },
    {
        question: "ما عدد حروف الإدغام؟",
        choices: [
            "4",
            "5",
            "6",
            "7"
        ],
        answer: "6"
    },
    {
        question: "أيُّ الحروف التّالية من حروف الاستعلاء؟",
        choices: [
            "س",
            "ص",
            "م",
            "ل"
        ],
        answer: "ص"
    },
    {
        question: "ما الحكم إذا جاءت ميم ساكنة قبل حرف الباء؟",
        choices: [
            "إظهار شفوي",
            "إدغام شفوي",
            "إخفاء شفوي",
            "إقلاب"
        ],
        answer: "إخفاء شفوي"
    },
    {
        question: "ما الحكم إذا جاءت ميم ساكنة قبل ميم متحرّكة؟",
        choices: [
            "إظهار شفوي",
            "إدغام شفوي بغنّة",
            "إخفاء",
            "إقلاب"
        ],
        answer: "إدغام شفوي بغنّة"
    },
    {
        question: "كم عدد حروف الإظهار الحلقي؟",
        choices: [
            "4",
            "5",
            "6",
            "7"
        ],
        answer: "6"
    },
    {
        question: "أيُّ الحروف التّالية ليس من حروف التّفخيم الدّائم؟",
        choices: [
            "ق",
            "ط",
            "ظ",
            "ب"
        ],
        answer: "ب"
    },
    {
        question: "متى تُفخّم الرّاء السّاكنة؟",
        choices: [
            "إذا سبقها كسر",
            "إذا سبقها فتح أو ضمّ",
            "إذا جاءت في آخر الكلمة فقط",
            "إذا تبعها حرف مد"
        ],
        answer: "ّإذا سبقها فتح أو ضم"
    },
    {
        question: "ما مقدار الغنّة في الإدغام بغنّة؟",
        choices: [
            "حركة واحدة",
            "حركتان",
            "ثلاث حركات",
            "أربع حركات"
        ],
        answer: "حركتان"
    },
    {
        question: "أيُّ المدود يُمدّ ستّ حركات لزوماً؟",
        choices: [
            "المدّ الطّبيعي",
            "المدّ المنفصل",
            "المدّ المتّصل",
            "المدّ اللّازم"
        ],
        answer: "المدّ اللّازم"
    },
    {
        question: "ما الحكم عند الوقف على كلمة منتهية بألف مدّ؟",
        choices: [
            "لا مدّ",
            "مدّ طبيعي",
            "مدّ لازم",
            "إدغام"
        ],
        answer: "مدّ طبيعي"
    },
    {
        question: "أيُّ الحروف التّالية من حروف القلقلة الكبرى عند الوقف؟",
        choices: [
            "ج",
            "ن",
            "م",
            "و"
        ],
        answer: "ج"
    },
    {
        question: "ما الحكم إذا جاء تنوين قبل حرف الواو؟",
        choices: [
            "إدغام بغنّة",
            "إدغام بغير غنّة",
            "إظهار",
            "إقلاب"
        ],
        answer: "إدغام بغنّة"
    },
    {
        question: "ما الحكم إذا جاء تنوين قبل حرف الرّاء؟",
        choices: [
            "إظهار",
            "إدغام بغير غنّة",
            "إخفاء",
            "إقلاب"
        ],
        answer: "إدغام بغير غنّة"
    },
    {
        question: "كم عدد حروف الإخفاء الحقيقي؟",
        choices: [
            "10",
            "12",
            "15",
            "18"
        ],
        answer: "15"
    },
    {
        question: "أيُّ الحروف التّالية ليس من حروف الإخفاء؟",
        choices: [
            "ت",
            "ث",
            "ح",
            "ك"
        ],
        answer: "ح"
    },
    {
        question: "ما تعريف المدّ العارض للسّكون؟",
        choices: [
            "مدّ بسبب همزة",
            "مدّ بسبب سكون عارض عند الوقف",
            "مدّ طبيعي فقط",
            "مدّ لازم أصلي"
        ],
        answer: "مدّ بسبب سكون عارض عند الوقف"
    },
    {
        question: "كم يمدّ المدّ العارض للسّكون؟",
        choices: [
            "حركتان فقط",
            "2 أو 4 أو 6 حركات",
            "6 فقط",
            "4 فقط"
        ],
        answer: "2 أو 4 أو 6 حركات"
    },
    {
        question: "ما الحكم إذا جاءت النّون السّاكنة قبل حرف الكاف؟",
        choices: [
            "إخفاء",
            "إظهار",
            "إدغام",
            "إقلاب"
        ],
        answer: "إخفاء"
    },
    {
        question: "أيُّ الحروف التّالية من حروف الإخفاء؟",
        choices: [
            "ف",
            "أ",
            "خ",
            "هـ"
        ],
        answer: "ف"
    },
    {
        question: "ما عدد حروف الاقلاب؟",
        choices: [
            "6",
            "7",
            "1",
            "9"
        ],
        answer: "1"
    },
    {
        question: "ما الحكم إذا جاءت ميم ساكنة قبل حرف الفاء؟",
        choices: [
            "إظهار شفوي",
            "إدغام",
            "إخفاء شفوي",
            "إقلاب"
        ],
        answer: "إظهار شفوي"
    },
    {
        question: "ما معنى القلقلة الصّغرى؟",
        choices: [
            "قلقلة عند الوقف",
            "قلقلة في وسط الكلمة",
            "قلقلة عند المدّ",
            "قلقلة مع الغنّة"
        ],
        answer: "قلقلة في وسط الكلمة"
    },
    {
        question: "أيُّ الحروف التّالية من حروف الاستفال(التّرقيق)؟",
        choices: [
            "ق",
            "ص",
            "ك",
            "ط"
        ],
        answer: "ك"
    },
    {
        question: "ما الحكم عند التقاء حرف مد وهمزة في كلمة واحدة؟",
        choices: [
            "مدّ منفصل",
            "مدّ متّصل",
            "مدّ عارض",
            "مدّ طبيعي"
        ],
        answer: "مدّ متّصل"
    },
    {
        question: "ما الحكم عند التقاء حرف مدّ وهمزة في كلمتين؟",
        choices: [
            "مدّ متّصل",
            "مدّ منفصل",
            "مدّ لازم",
            "لا مدّ"
        ],
        answer: "مدّ منفصل"
    },
    {
        question: "أيُّ الحروف التّالية من حروف الإطباق(التّفخيم)؟",
        choices: [
            "س",
            "ز",
            "ط",
            "ل"
        ],
        answer: "ط"
    },
    {
        question: "ما الحكم إذا جاءت النّون المشدّدة؟",
        choices: [
            "إظهار",
            "غنّة مشدّدة بمقدار حركتين",
            "إقلاب",
            "مدّ"
        ],
        answer: "غنّة مشدّدة بمقدار حركتين"
    },
    {
        question: "ما حكم لام لفظ الجلالة إذا سبقها فتح أو ضمّ؟",
        choices: [
            "ترقيق",
            "تفخيم",
            "إدغام",
            "إخفاء"
        ],
        answer: "تفخيم"
    },
    {
        question: "ما حكم لام لفظ الجلالة إذا سبقها كسر؟",
        choices: [
            "تفخيم",
            "ترقيق",
            "إقلاب",
            "مد لازم"
        ],
        answer: "ترقيق"
    }
];


let currentQuestion = 1;
let index = 0;
let totalQuestion = questions.length;
let currentScore = 0;

welcomeMsg.classList.add("fade-in");


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {

    if (index === 0) {
        shuffleArray(questions);
        questions.forEach(q => shuffleArray(q.choices));
    }
    
    parent.classList.add("fade-in");
    welcomeMsg.classList.add("hide");
    viewResult.classList.add("hide")
    startBtn.classList.add("hide");
    testContainer.classList.remove("hide");
    nextBtn.classList.remove("hide");
    footer.classList.remove("hide");
    


    question.innerHTML = questions[index].question;
    options.innerHTML = "";
    questions[index].choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerHTML = choice;
        options.appendChild(button)
        button.value = choice;

        nextBtn.disabled = true;
        button.addEventListener("click", () => {
            Array.from(options.children).forEach(btn => btn.disabled = true);
            if (button.value === questions[index].answer) {
                new Audio("correct.mp3").play();
                button.classList.add("blink");
                button.classList.add("green")
                button.innerHTML = `${button.value} <span>&#10004;</span> `;
                currentScore++
                scoreProgress.innerHTML = `درجتك : ${currentScore}/${totalQuestion}`
            } else if (button.value !== questions[index].answer) {
                new Audio("wrong.mp3").play();
                button.classList.add("shake");
                button.classList.add("red")
                button.innerHTML = `${button.value}  <span>&#10008;</span> `;
                scoreProgress.innerHTML = `درجتك : ${currentScore}/${totalQuestion}`
                Array.from(options.children).forEach(btn => {
                    if (btn.value === questions[index].answer) {
                        btn.classList.add("green");
                        btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
                    }
                })
            }
            nextBtn.disabled = false;
            if (currentQuestion === totalQuestion) {
                viewResult.classList.remove("hide")
                nextBtn.classList.add("hide")
            } else {
                nextBtn.innerHTML = "السّؤال التّالي"
            }
        })
    })


    questionProgress.innerHTML = `السّؤال : ${currentQuestion} من ${totalQuestion}`;
    scoreProgress.innerHTML = `درجتك : ${currentScore}/${totalQuestion}`;


}



function displayResult() {

    if (currentQuestion < totalQuestion) {
        index++;
        currentQuestion++
        startQuiz();

    } else {
        header.innerHTML = "Quiz Completed"
        testContainer.classList.add("hide");
        nextBtn.classList.add("hide")
        footer.classList.add("hide")
        endScreen.classList.remove("hide")
        endScreen.classList.add("fade-in");
        score.innerHTML = `درجتك: <strong>${currentScore}/${totalQuestion}</strong>`;
        const percent = ((currentScore / totalQuestion) * 100).toFixed(1);
        percentage.innerHTML = `لقد حصلت على <strong>%${percent}</strong> من إجمالي الأسئلة.`

        if (percent < 50) {
            result.innerHTML = "لقد <strong>رسبت</strong>، حاول مجددًا في المرة القادمة! 😞"
        } else {
            result.innerHTML = "<strong>ما شاء اللّه</strong>، لقد أنجزت عملًا رائعًا!"
        }
    }
}




function restartGame() {
    currentQuestion = 1;
    index = 0;
    totalQuestion = questions.length;
    currentScore = 0;
    welcomeMsg.classList.add("fade-in");
    endScreen.classList.add("hide")
    welcomeMsg.classList.remove("hide");
    startBtn.classList.remove("hide");
}

startBtn.addEventListener("click", () => {
    startQuiz()
}

);
nextBtn.addEventListener("click", displayResult);
viewResult.addEventListener("click", displayResult)

restartBtn.addEventListener("click", restartGame);
