// lessons-python.js - Python Lesson Data
// Add new Python lessons to the lessons array below

window.pythonLessons = {
    name: "Python",
    lessons: [
        {
            number: 1,
            title: "Python Variables",
            description: "Python makes creating variables simple - just write the name, equals sign, and value. Python automatically detects whether you're storing text, numbers, or other data types.",
            concept: {
                title: "Simple Variable Assignment",
                text: "Python variables are created by simply assigning a value. No special keywords needed! Python automatically determines the data type based on the value you assign.",
                example: `<span class="code-content">language = "Python"</span>
<span class="code-content">age = 30</span>
<span class="code-tag">print</span><span class="code-content">(language)</span>`
            },
            task: {
                title: "Create Your First Python Variable!",
                description: 'Create a variable called "favorite_language" with the value "Python":',
                requiredTags: ["=", '"'],
                answer: 'favorite_language = "Python"',
                hint: "Just write: variable_name = value (no special keywords needed in Python!)",
                wordButtons: ["favorite_language ", "Python "]
            }
        },
        {
            number: 2,
            title: "Python Print Function",
            description: "The print() function displays output on the screen. It's the most common way to show results and communicate with users in Python programs.",
            concept: {
                title: "Using the print() Function",
                text: "The print() function displays whatever you put inside the parentheses. You can print text in quotes, variables, numbers, or the results of calculations.",
                example: `<span class="code-tag">print</span><span class="code-content">("Hello Python World")</span>
<span class="code-tag">print</span><span class="code-content">(favorite_language)</span>
<span class="code-tag">print</span><span class="code-content">(10 + 5)</span>`
            },
            task: {
                title: "Print Your First Message!",
                description: 'Use print() to display "Python is awesome for beginners":',
                requiredTags: ["print", "(", ")", '"'],
                answer: 'print("Python is awesome for beginners")',
                hint: "Put the text in quotes inside the parentheses of print()",
                wordButtons: ["Python ", "is ", "awesome ", "for ", "beginners "]
            }
        }
    ]
};

/*
TO ADD A NEW PYTHON LESSON - COPY THIS TEMPLATE AND PASTE IT ABOVE THE CLOSING ]:

        {
            number: 3,
            title: "LESSON_TITLE",
            description: "LESSON_DESCRIPTION - What this lesson teaches in detail",
            concept: {
                title: "CONCEPT_TITLE",
                text: "CONCEPT_EXPLANATION - Detailed explanation of the concept",
                example: `<span class="code-tag">keyword</span><span class="code-content"> = "value"</span>`
            },
            task: {
                title: "TASK_TITLE",
                description: 'TASK_INSTRUCTIONS - Clear instructions for what student should do:',
                requiredTags: ["tag1", "tag2"],
                answer: 'EXPECTED_ANSWER',
                hint: "HELPFUL_HINT - Guidance to help struggling students",
                wordButtons: ["word1 ", "word2 ", "word3 "]
            }
        },

SYNTAX HIGHLIGHTING:
- Use <span class="code-tag"> for Python keywords (print, def, if, for, while, etc.)
- Use <span class="code-content"> for strings, values, and regular code

EXAMPLE: Adding a Lists Lesson
        {
            number: 3,
            title: "Python Lists",
            description: "Lists in Python store multiple items in a single variable. They are ordered, changeable, and allow duplicate values. Lists are one of the most useful data types in Python.",
            concept: {
                title: "Creating and Using Lists",
                text: "Lists are created using square brackets and can store different types of data. You can access items by their position (index) starting from 0.",
                example: `<span class="code-content">fruits = ["apple", "banana", "orange"]</span>
<span class="code-tag">print</span><span class="code-content">(fruits[0])</span>
<span class="code-tag">print</span><span class="code-content">(len(fruits))</span>`
            },
            task: {
                title: "Create Your First List!",
                description: 'Create a list called "colors" with "red", "green", "blue":',
                requiredTags: ["=", "[", "]", '"', ","],
                answer: 'colors = ["red", "green", "blue"]',
                hint: "Use square brackets and separate items with commas. Don't forget the quotes around strings!",
                wordButtons: ["colors ", "red ", "green ", "blue "]
            }
        },
*/