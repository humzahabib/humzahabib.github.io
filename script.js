
let questions = [
    "What is the most popular programming problem",
    "Where do programmers hangout?",
    "What is the golden rule in programming?",
    "What is the biggest lie about computer programming?",
    "Why should you date a programmer?",
    "Why is Python slow?",
    "Can you give me a programming music note?",
    "How programmers open a Jar?"
]

let options = [
    ["Missing a semicolon", "Missing curly braces", "Undeclared variables", "Unmatched quotes"],
    ["They don't", "At Stack Overflow lounge", "In Parks", "Discord"],
    ["Bugs are features too", "You need math to do it", "If it works, don't touch it", "All of these"],
    ["HTML is a programming language", "Programmers can hack", "Miscrosoft Word is the best IDE", "All of these"],
    ["They are funny", "They are interesting", "They can fix your computer", "They can give you Ruby and Pearls"],
    ["It's a snake", "It's lazy", "Because of IDLE", "None of the above"],
    ["D#", "C♭", "C#", "D♭"],
    ["They use knives", "With FILE I/O", "They break it", "They use Java"]

]

let answers = [
    "Missing a semicolon",
    "At Stack Overflow lounge",
    "If it works, don't touch it",
    "All of these",
    "They can give you Ruby and Pearls",
    "Because of IDLE",
    "C#",
    "They use Java"
]

let question_number = 0;

let question_text = null;
let option_buttons=[];
let next_button;

let quiz_div;

let correct = 0;
let total = 8;

function do_things()
{
    question_text = document.getElementById("Question");
    option_buttons.push(document.getElementById("a"));
    option_buttons.push(document.getElementById("b"));
    option_buttons.push(document.getElementById("c"));
    option_buttons.push(document.getElementById("d"));
    next_button = document.getElementById("nextbutton");
    quiz_div = document.getElementById("quiz-div");
}

function start_quiz()
{
    document.getElementById("quiz-start-div").style.visibility = "hidden";
    quiz_div.style.visibility = "visible";
    next_question();
}

function next_question()
{
    if (question_number < 8)
    {
        question_text.innerHTML = questions[question_number];
        for (let i = 0; i < 4; i++)
        {
            option_buttons[i].innerHTML = options[question_number][i];
            option_buttons[i].disabled = false;
            option_buttons[i].style.border = "none";
        }
        next_button.disabled = true;
    }
    else
        show_results();

}


function verify_answer(event)
{
    for (button of option_buttons)
    {
        button.style.border = "solid";
    }
    var trigger = event.srcElement;
    for (button of option_buttons)
    {
        if (button != trigger)
            button.disabled = true;
    }
    if (trigger.innerHTML === answers[question_number])
    {
        trigger.style.borderColor = "#89F0C3";
        correct++;
    }
    else
        trigger.style.borderColor = "#ED4337";

    next_button.disabled = false;
    question_number++;
}


function show_results()
{
    let result_div = document.getElementById("result-div");
    let statement = document.getElementById("result-statement");
    statement.innerHTML = "You've answered " + correct.toString() + " questions correctly out of " + total.toString() + " questions. I don't have time to analyze your results so do it yourself.";
    result_div.style.visibility = "visible";
    quiz_div.style.visibility = "hidden";

}
