/* =========================================
   BOOK DATA
========================================= */

const books = [

    {
        title: "The Midnight Library",
        author: "Matt Haig",

        about:
            "A thought-provoking story about choices, regrets, and the different lives a person could have lived.",

        traits: {
            emotional: 3,
            reflective: 3,
            personalGrowth: 3,
            easy: 2,
            relationships: 1,
            mystery: 1,
            adventure: 0,
            humor: 0,
            fast: 1
        }
    },


    {
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",

        about:
            "A warm and imaginative story about belonging, friendship, family, and finding a place where you feel accepted.",

        traits: {
            emotional: 2,
            reflective: 2,
            personalGrowth: 3,
            easy: 3,
            relationships: 3,
            mystery: 0,
            adventure: 2,
            humor: 2,
            fast: 1
        }
    },


    {
        title: "One of Us Is Lying",
        author: "Karen M. McManus",

        about:
            "A fast-paced mystery in which five students enter detention, but only four leave alive.",

        traits: {
            emotional: 1,
            reflective: 1,
            personalGrowth: 1,
            easy: 3,
            relationships: 2,
            mystery: 3,
            adventure: 2,
            humor: 1,
            fast: 3
        }
    },


    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",

        about:
            "A character-driven story about fame, love, identity, difficult choices, and the secrets behind a legendary actress's life.",

        traits: {
            emotional: 3,
            reflective: 2,
            personalGrowth: 2,
            easy: 2,
            relationships: 3,
            mystery: 2,
            adventure: 0,
            humor: 1,
            fast: 1
        }
    },


    {
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",

        about:
            "A determined student investigates an old murder case and discovers that the truth may be more complicated than it seems.",

        traits: {
            emotional: 1,
            reflective: 1,
            personalGrowth: 2,
            easy: 3,
            relationships: 1,
            mystery: 3,
            adventure: 3,
            humor: 1,
            fast: 3
        }
    },


    {
        title: "The Alchemist",
        author: "Paulo Coelho",

        about:
            "A short philosophical journey about dreams, purpose, personal discovery, and following what matters to you.",

        traits: {
            emotional: 2,
            reflective: 3,
            personalGrowth: 3,
            easy: 3,
            relationships: 1,
            mystery: 1,
            adventure: 3,
            humor: 0,
            fast: 2
        }
    }

];


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question: "What do you enjoy most in a story?",

        answers: [
            {
                text: "Emotional moments and meaningful relationships",
                traits: {
                    emotional: 3,
                    relationships: 3
                }
            },

            {
                text: "Mysteries, secrets, and unexpected discoveries",
                traits: {
                    mystery: 3,
                    fast: 2
                }
            },

            {
                text: "Adventure and exciting situations",
                traits: {
                    adventure: 3,
                    fast: 2
                }
            },

            {
                text: "Personal growth and discovering something new",
                traits: {
                    personalGrowth: 3,
                    reflective: 2
                }
            },

            {
                text: "Funny and comforting moments",
                traits: {
                    humor: 3,
                    relationships: 2,
                    easy: 2
                }
            }
        ]
    },


    {
        question: "How would you like a book to make you feel?",

        answers: [

            {
                text: "Emotional",
                traits: {
                    emotional: 3
                }
            },

            {
                text: "Curious and intrigued",
                traits: {
                    mystery: 3
                }
            },

            {
                text: "Excited",
                traits: {
                    adventure: 3,
                    fast: 2
                }
            },

            {
                text: "Inspired or thoughtful",
                traits: {
                    reflective: 3,
                    personalGrowth: 2
                }
            },

            {
                text: "Comforted and happy",
                traits: {
                    humor: 2,
                    relationships: 3
                }
            }

        ]
    },


    {
        question: "What kind of characters interest you?",

        answers: [

            {
                text: "Characters dealing with real emotions",
                traits: {
                    emotional: 2,
                    relationships: 2
                }
            },

            {
                text: "Characters trying to solve a problem",
                traits: {
                    mystery: 3,
                    adventure: 2
                }
            },

            {
                text: "Characters going on an adventure",
                traits: {
                    adventure: 3
                }
            },

            {
                text: "Characters discovering themselves",
                traits: {
                    personalGrowth: 3,
                    reflective: 2
                }
            },

            {
                text: "Characters with funny or unique personalities",
                traits: {
                    humor: 3,
                    relationships: 2
                }
            }

        ]
    },


    {
        question: "What could make you lose interest in a book?",

        answers: [

            {
                text: "If the story feels too slow",
                traits: {
                    fast: 3
                }
            },

            {
                text: "If I cannot connect with the characters",
                traits: {
                    relationships: 3,
                    emotional: 2
                }
            },

            {
                text: "If nothing interesting happens",
                traits: {
                    adventure: 2,
                    mystery: 2,
                    fast: 2
                }
            },

            {
                text: "If the story feels meaningless",
                traits: {
                    reflective: 3,
                    personalGrowth: 2
                }
            },

            {
                text: "If the book is too difficult to follow",
                traits: {
                    easy: 3
                }
            }

        ]
    },


    {
        question: "What kind of reading experience are you looking for?",

        answers: [

            {
                text: "Something emotional",
                traits: {
                    emotional: 3
                }
            },

            {
                text: "Something that keeps me guessing",
                traits: {
                    mystery: 3,
                    fast: 2
                }
            },

            {
                text: "Something exciting",
                traits: {
                    adventure: 3,
                    fast: 2
                }
            },

            {
                text: "Something that makes me think",
                traits: {
                    reflective: 3,
                    personalGrowth: 3
                }
            },

            {
                text: "Something cozy and enjoyable",
                traits: {
                    humor: 2,
                    relationships: 3,
                    easy: 2
                }
            }

        ]
    },


    {
        question: "How much time would you realistically spend reading?",

        answers: [

            {
                text: "10–15 minutes at a time",
                traits: {
                    easy: 2,
                    fast: 2
                }
            },

            {
                text: "20–30 minutes",
                traits: {
                    easy: 2
                }
            },

            {
                text: "30–60 minutes",
                traits: {
                    emotional: 1,
                    reflective: 1
                }
            },

            {
                text: "More than an hour",
                traits: {
                    adventure: 1,
                    relationships: 1,
                    mystery: 1
                }
            }

        ]
    }

];


/* =========================================
   VARIABLES
========================================= */

let currentQuestion = 0;

let selectedAnswer = null;

let userTraits = {};


/* =========================================
   HTML ELEMENTS
========================================= */

const introScreen = document.getElementById("intro");

const quizScreen = document.getElementById("quiz");

const resultScreen = document.getElementById("result");

const startBtn = document.getElementById("startBtn");

const nextBtn = document.getElementById("nextBtn");

const restartBtn = document.getElementById("restartBtn");

const questionElement = document.getElementById("question");

const answersElement = document.getElementById("answers");

const questionNumberElement =
    document.getElementById("questionNumber");

const progressBar =
    document.getElementById("progressBar");

const bookTitle =
    document.getElementById("bookTitle");

const bookAuthor =
    document.getElementById("bookAuthor");

const bookReason =
    document.getElementById("bookReason");

const bookAbout =
    document.getElementById("bookAbout");


/* =========================================
   START QUIZ
========================================= */

startBtn.addEventListener("click", function () {

    introScreen.classList.remove("active");

    quizScreen.classList.add("active");

    currentQuestion = 0;

    userTraits = {};

    showQuestion();

});


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    selectedAnswer = null;

    nextBtn.disabled = true;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumberElement.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    answersElement.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.classList.add("answer-button");

        button.textContent = answer.text;

        button.addEventListener("click", function () {

            selectAnswer(index);

        });

        answersElement.appendChild(button);

    });

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(index) {

    selectedAnswer = index;

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach(button => {

        button.classList.remove("selected");

    });

    buttons[index].classList.add("selected");

    nextBtn.disabled = false;

}


/* =========================================
   NEXT QUESTION
========================================= */

nextBtn.addEventListener("click", function () {

    const selected =
        questions[currentQuestion].answers[selectedAnswer];

    addTraits(selected.traits);


    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();

    }

});


/* =========================================
   ADD USER TRAITS
========================================= */

function addTraits(traits) {

    Object.keys(traits).forEach(trait => {

        if (!userTraits[trait]) {

            userTraits[trait] = 0;

        }

        userTraits[trait] += traits[trait];

    });

}


/* =========================================
   CALCULATE BEST BOOK
========================================= */

function calculateBook() {

    let bestBook = null;

    let highestScore = -Infinity;


    books.forEach(book => {

        let score = 0;


        Object.keys(userTraits).forEach(trait => {

            const userScore =
                userTraits[trait] || 0;

            const bookScore =
                book.traits[trait] || 0;

            score += userScore * bookScore;

        });


        if (score > highestScore) {

            highestScore = score;

            bestBook = book;

        }

    });


    return bestBook;

}


/* =========================================
   CREATE REASON
========================================= */

function createReason(book) {

    const strongestTraits =
        Object.entries(userTraits)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(item => item[0]);


    const descriptions = {

        emotional:
            "you seem to enjoy emotional stories",

        reflective:
            "you seem to appreciate stories that make you think",

        personalGrowth:
            "you seem interested in personal growth and self-discovery",

        relationships:
            "you seem to value strong relationships between characters",

        mystery:
            "you seem to enjoy curiosity, secrets, and discovering answers",

        adventure:
            "you seem to enjoy adventure and exciting situations",

        humor:
            "you seem to appreciate humor and enjoyable moments",

        easy:
            "you seem to prefer an accessible reading experience",

        fast:
            "you seem to prefer stories that keep you engaged"
    };


    const phrases =
        strongestTraits
            .map(trait => descriptions[trait])
            .filter(Boolean);


    if (phrases.length >= 2) {

        return `${capitalize(phrases[0])}, and ${phrases[1]}. ${book.title} combines these elements in a way that may make the reading experience more engaging for you.`;

    }


    return `Your answers suggest that ${phrases[0] || "this type of story may match your preferences"}. ${book.title} combines several of the characteristics you selected.`;

}


/* =========================================
   CAPITALIZE
========================================= */

function capitalize(text) {

    return text.charAt(0).toUpperCase() + text.slice(1);

}


/* =========================================
   SHOW RESULT
========================================= */

function showResult() {

    const recommendedBook =
        calculateBook();


    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");


    bookTitle.textContent =
        recommendedBook.title;

    bookAuthor.textContent =
        recommendedBook.author;

    bookAbout.textContent =
        recommendedBook.about;

    bookReason.textContent =
        createReason(recommendedBook);

}


/* =========================================
   RESTART
========================================= */

restartBtn.addEventListener("click", function () {

    resultScreen.classList.remove("active");

    introScreen.classList.add("active");

    currentQuestion = 0;

    userTraits = {};

});
