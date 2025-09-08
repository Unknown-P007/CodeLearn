// lessons-javascript.js - JavaScript Lesson Data
// Add new JavaScript lessons to the lessons array below

window.javascriptLessons = {
    name: "JavaScript",
    lessons: [
        {
            number: 1,
            title: "JavaScript Variables",
            description: "Variables are containers that store data values. In JavaScript, you declare variables using let (for changeable values) or const (for unchangeable values). They're fundamental to all programming.",
            concept: {
                title: "Creating Variables with let and const",
                text: "Use let for variables that can change their value, and const for variables that stay the same. Always end statements with a semicolon.",
                example: `<span class="code-tag">let</span> <span class="code-content">userName = "Alice";</span>
<span class="code-tag">const</span> <span class="code-content">userAge = 25;</span>
<span class="code-tag">console.log</span><span class="code-content">(userName);</span>`
            },
            task: {
                title: "Create Your First Variable!",
                description: 'Create a variable called "message" with the value "Hello JavaScript":',
                requiredTags: ["let ", "const ", "=", ";", '"'],
                answer: 'let message = "Hello JavaScript";',
                hint: "Use 'let' followed by the variable name, then = and the value in quotes. Don't forget the semicolon!",
                wordButtons: ["message ", "Hello ", "JavaScript "]
            }
        },
        {
            number: 2,
            title: "Console Output",
            description: "The console.log() function displays output in the browser's developer console. It's essential for testing code, debugging, and showing results to developers.",
            concept: {
                title: "Using console.log() to Display Output",
                text: "The console.log() function prints values to the console. You can display variables, text strings, numbers, or the results of calculations.",
                example: `<span class="code-tag">console.log</span><span class="code-content">("Hello World");</span>
<span class="code-tag">console.log</span><span class="code-content">(message);</span>
<span class="code-tag">console.log</span><span class="code-content">(10 + 5);</span>`
            },
            task: {
                title: "Print to the Console!",
                description: 'Use console.log to display "JavaScript is amazing":',
                requiredTags: ["console.log", "(", ")", ";", '"'],
                answer: 'console.log("JavaScript is amazing");',
                hint: "Put the text in quotes inside the parentheses of console.log() and end with a semicolon",
                wordButtons: ["JavaScript ", "is ", "amazing "]
            }
        }
    ]
};