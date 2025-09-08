// lessons-java.js - Java Lesson Data
// Add new Java lessons to the lessons array below

window.javaLessons = {
    name: "Java",
    lessons: [
        {
            number: 1,
            title: "Java Variable Types",
            description: "Java is a strongly-typed language, which means you must declare the type of every variable before using it. This makes programs more reliable and helps catch errors early in development.",
            concept: {
                title: "CONCEPT_TITLE",
                text: "CONCEPT_EXPLANATION - Detailed explanation of the concept",
                example: `<span class="code-tag">Type</span> <span class="code-content">variable = "value";</span>`
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
- Use <span class="code-tag"> for Java keywords (public, class, String, int, System.out.println, etc.)
- Use <span class="code-content"> for strings, values, and regular code

EXAMPLE: Adding a Methods Lesson
        {
            number: 3,
            title: "Java Methods",
            description: "Methods in Java are blocks of code that perform specific tasks. They help organize code and make it reusable. Methods must specify their return type and access level.",
            concept: {
                title: "Creating Static Methods",
                text: "Static methods belong to the class rather than an instance. They can be called without creating an object. The 'public static' keywords make the method accessible from anywhere.",
                example: `<span class="code-tag">public static void</span> <span class="code-content">sayHello() {</span>
    <span class="code-tag">System.out.println</span><span class="code-content">("Hello from method!");</span>
<span class="code-content">}</span>

<span class="code-content">sayHello();</span>`
            },
            task: {
                title: "Create Your First Method!",
                description: 'Create a method called "welcome" that prints "Welcome to Java programming":',
                requiredTags: ["public static void ", "(", ")", "{", "}", "System.out.println", ";"],
                answer: 'public static void welcome() { System.out.println("Welcome to Java programming"); }',
                hint: "Use 'public static void' followed by method name, parentheses, and curly braces with System.out.println inside",
                wordButtons: ["welcome ", "Welcome ", "to ", "Java ", "programming "]
            }
        },
*/ {
                title: "Declaring Variables with Types",
                text: "In Java, you must specify the data type when creating variables. Common types include String for text, int for whole numbers, and double for decimal numbers.",
                example: `<span class="code-tag">String</span> <span class="code-content">name = "Java";</span>
<span class="code-tag">int</span> <span class="code-content">age = 25;</span>
<span class="code-tag">System.out.println</span><span class="code-content">(name);</span>`
            },
            task: {
                title: "Declare Your First Java Variable!",
                description: 'Create a String variable called "greeting" with the value "Hello Java World":',
                requiredTags: ["String ", "int ", "double ", "=", ";", '"'],
                answer: 'String greeting = "Hello Java World";',
                hint: "Format: Type variableName = value; (don't forget the semicolon!)",
                wordButtons: ["greeting ", "Hello ", "Java ", "World "]
            }
        },
        {
            number: 2,
            title: "Java Output",
            description: "System.out.println() is Java's way of displaying output to the console. It's part of the System class and automatically adds a new line after printing.",
            concept: {
                title: "Using System.out.println()",
                text: "The System.out.println() method prints the value and moves the cursor to a new line. You can print text in quotes, variables, or mathematical expressions.",
                example: `<span class="code-tag">System.out.println</span><span class="code-content">("Hello World");</span>
<span class="code-tag">System.out.println</span><span class="code-content">(greeting);</span>
<span class="code-tag">System.out.println</span><span class="code-content">(10 + 5);</span>`
            },
            task: {
                title: "Print in Java!",
                description: 'Use System.out.println to display "Java programming is powerful":',
                requiredTags: ["System.out.println", "(", ")", ";", '"'],
                answer: 'System.out.println("Java programming is powerful");',
                hint: "Put the text in quotes inside the parentheses and don't forget the semicolon at the end",
                wordButtons: ["Java ", "programming ", "is ", "powerful "]
            }
        }
    ]
};

/*
TO ADD A NEW JAVA LESSON - COPY THIS TEMPLATE AND PASTE IT ABOVE THE CLOSING ]:

        {
            number: 3,
            title: "LESSON_TITLE",
            description: "LESSON_DESCRIPTION - What this lesson teaches in detail",
            concept: