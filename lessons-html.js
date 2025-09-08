// lessons-html.js - HTML Lesson Data
// Add new HTML lessons to the lessons array below

window.htmlLessons = {
    name: "HTML/CSS",
    lessons: [
        {
            number: 1,
            title: "HTML Headings",
            description: "HTML headings are used to define titles and organize content hierarchically. They range from h1 (largest) to h6 (smallest) and help structure web pages for both users and search engines.",
            concept: {
                title: "Understanding HTML Heading Tags",
                text: "Headings create visual hierarchy and structure in your content. The h1 tag is typically used for main titles, h2 for major sections, and h3-h6 for subsections.",
                example: `<span class="code-tag">&lt;h1&gt;</span><span class="code-content">Main Title</span><span class="code-tag">&lt;/h1&gt;</span>
<span class="code-tag">&lt;h2&gt;</span><span class="code-content">Section Title</span><span class="code-tag">&lt;/h2&gt;</span>
<span class="code-tag">&lt;h3&gt;</span><span class="code-content">Subsection Title</span><span class="code-tag">&lt;/h3&gt;</span>`
            },
            task: {
                title: "Create Your First Heading!",
                description: 'Create a heading that says "Welcome to my website" using any heading level (h1, h2, or h3):',
                requiredTags: ["<h1>", "</h1>", "<h2>", "</h2>", "<h3>", "</h3>"],
                answer: "Welcome to my website",
                hint: "Remember: HTML tags have opening and closing parts. Choose a heading level and wrap your text with matching tags!",
                wordButtons: ["Welcome ", "to ", "my ", "website "]
            }
        },
        {
            number: 2,
            title: "HTML Paragraphs",
            description: "Paragraphs are the building blocks of web content. The p tag creates blocks of text that are automatically separated with spacing, making your content readable and well-structured.",
            concept: {
                title: "Using Paragraph Tags",
                text: "The p tag wraps text content to create paragraphs. Each paragraph gets automatic spacing above and below, creating clean, readable text blocks.",
                example: `<span class="code-tag">&lt;p&gt;</span><span class="code-content">This is my first paragraph of text.</span><span class="code-tag">&lt;/p&gt;</span>
<span class="code-tag">&lt;p&gt;</span><span class="code-content">This is a second paragraph with more content.</span><span class="code-tag">&lt;/p&gt;</span>`
            },
            task: {
                title: "Write Your First Paragraph!",
                description: 'Create a paragraph that says "I love learning HTML and building websites":',
                requiredTags: ["<p>", "</p>"],
                answer: "I love learning HTML and building websites",
                hint: "Use the p tag to wrap your text. Don't forget both opening and closing tags!",
                wordButtons: ["I ", "love ", "learning ", "HTML ", "and ", "building ", "websites "]
            }
        }
    ]
};

/*
TO ADD A NEW HTML LESSON - COPY THIS TEMPLATE AND PASTE IT ABOVE THE CLOSING ]:

        {
            number: 3,
            title: "LESSON_TITLE",
            description: "LESSON_DESCRIPTION - What this lesson teaches in detail",
            concept: {
                title: "CONCEPT_TITLE",
                text: "CONCEPT_EXPLANATION - Detailed explanation of the concept",
                example: `<span class="code-tag">&lt;tag&gt;</span><span class="code-content">content</span><span class="code-tag">&lt;/tag&gt;</span>`
            },
            task: {
                title: "TASK_TITLE",
                description: 'TASK_INSTRUCTIONS - Clear instructions for what student should do:',
                requiredTags: ["<tag>", "</tag>"],
                answer: 'EXPECTED_ANSWER',
                hint: "HELPFUL_HINT - Guidance to help struggling students",
                wordButtons: ["word1 ", "word2 ", "word3 "]
            }
        },

SYNTAX HIGHLIGHTING:
- Use <span class="code-tag"> for HTML tags
- Use <span class="code-content"> for content/text
- Use &lt; for < and &gt; for > in HTML tags

EXAMPLE: Adding a Links Lesson
        {
            number: 3,
            title: "HTML Links",
            description: "Links connect web pages together and allow navigation. The anchor tag (a) with href attribute creates clickable links to other pages or websites.",
            concept: {
                title: "Creating Links with Anchor Tags",
                text: "The anchor tag <a> creates links. The href attribute specifies the destination URL or page.",
                example: `<span class="code-tag">&lt;a href="https://example.com"&gt;</span><span class="code-content">Visit Example</span><span class="code-tag">&lt;/a&gt;</span>
<span class="code-tag">&lt;a href="about.html"&gt;</span><span class="code-content">About Page</span><span class="code-tag">&lt;/a&gt;</span>`
            },
            task: {
                title: "Create Your First Link!",
                description: 'Create a link that says "Click here" and links to "https://google.com":',
                requiredTags: ["<a href=\"", "\">", "</a>"],
                answer: 'Click here',
                hint: "Use <a href=\"URL\">text</a> format. Don't forget the closing tag!",
                wordButtons: ["Click ", "here "]
            }
        },
*/