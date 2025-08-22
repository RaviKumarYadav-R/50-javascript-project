const questions = [
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: {
            "option-1": "<style>",
            "option-2": "<css>",
            "option-3": "<script>",
            "option-4": "<link>"
        },
        correct: "option-1"
    },
    {
        question: "Which CSS property controls the text size?",
        options: {
            "option-1": "font-style",
            "option-2": "text-size",
            "option-3": "font-size",
            "option-4": "text-style"
        },
        correct: "option-3"
    },
    {
        question: "Which is the correct syntax for a JavaScript array?",
        options: {
            "option-1": "let colors = (1:'red', 2:'green')",
            "option-2": "let colors = ['red', 'green']",
            "option-3": "let colors = 'red', 'green'",
            "option-4": "let colors = {1:'red', 2:'green'}"
        },
        correct: "option-2"
    },
    {
        question: "Which company developed JavaScript?",
        options: {
            "option-1": "Microsoft",
            "option-2": "Netscape",
            "option-3": "Google",
            "option-4": "Apple"
        },
        correct: "option-2"
    },
    {
        question: "What does the DOM stand for?",
        options: {
            "option-1": "Document Object Model",
            "option-2": "Data Object Model",
            "option-3": "Document Oriented Module",
            "option-4": "Dynamic Object Method"
        },
        correct: "option-1"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: {
            "option-1": "Boolean",
            "option-2": "Undefined",
            "option-3": "Float",
            "option-4": "Number"
        },
        correct: "option-3"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: {
            "option-1": "function = myFunction()",
            "option-2": "function:myFunction()",
            "option-3": "function myFunction()",
            "option-4": "create myFunction()"
        },
        correct: "option-3"
    },
    {
        question: "Which HTML tag is used to display a picture?",
        options: {
            "option-1": "<img>",
            "option-2": "<picture>",
            "option-3": "<src>",
            "option-4": "<photo>"
        },
        correct: "option-1"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: {
            "option-1": "onmouseclick",
            "option-2": "onclick",
            "option-3": "onchange",
            "option-4": "onmouseover"
        },
        correct: "option-2"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: {
            "option-1": "# this is a comment",
            "option-2": "// this is a comment",
            "option-3": "<!-- this is a comment -->",
            "option-4": "/* this is a comment */"
        },
        correct: "option-2"
    }
];

// html DOM
let questionWrapper = document.querySelector(".question")
let radiobtn = document.querySelectorAll("input")
let currentQuestion = document.getElementById("current-question")
let totalQuestion = document.getElementById("total-questions")
let nextBtn = document.getElementById("next-question-btn")
const dialog = document.getElementById("end-dialog");
const correctAnswerSpan = document.getElementById("total-correct-answers");
let questionNo = 0;
let score = 0
function renderQuestion() {
    currentQuestion.innerHTML = questionNo + 1
    totalQuestion.innerHTML = questions.length
    let current = questions[questionNo]
    questionWrapper.innerHTML = current.question

    Object.entries(current.options).forEach(([key, value]) => {
        const optionInput = document.getElementById(key)
        const optionLabel = document.querySelector(`label[for="${key}"]`)
        optionInput.checked = false;
        optionInput.disabled = false
        optionLabel.textContent = value
    })

}

radiobtn.forEach(btn => {
    btn.addEventListener("change", () => {
        radiobtn.forEach(el => el.parentElement.classList.remove("selected"))
        btn.parentElement.classList.add("selected")
    })
})

nextBtn.addEventListener("click", () => {
    let selected = document.querySelector("input[name='answer']:checked")
    if (!selected) {
        alert("select one option")
        return
    }

    let userAnswer = selected.value
    let correctAnswer = questions[questionNo].correct

    if (correctAnswer === userAnswer) {
        selected.parentElement.classList.replace("selected", "correct")
        score++
    } else {
        selected.parentElement.classList.replace("selected", "wrong")
    }

    if (userAnswer !== correctAnswer) {
        const correctoption = document.getElementById(correctAnswer)
        correctoption.parentElement.classList.add("correct")
    }

    radiobtn.forEach(el => el.disabled = true)

    nextBtn.disabled = true
    setTimeout(() => {
        selected.parentElement.className = "answer-wrapper"
        document.getElementById(correctAnswer).parentElement.className = "answer-wrapper"
        questionNo++
        if (questionNo < questions.length) {
            renderQuestion()
        } else {
            // Show dialog
            correctAnswerSpan.textContent = score;
            dialog.showModal();
        }
        nextBtn.disabled = false
    }, 2000)
})

document.querySelector(".try-again-btn").addEventListener("click", () => {
    questionNo = 0;
    score = 0;
    renderQuestion();
    dialog.close();
});

renderQuestion()