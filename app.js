// app.js - Main CodeLearn Application Logic - COMPLETE FIXED VERSION
// This file connects all lesson files and handles the learning interface

let selectedLanguage = null;
let currentLesson = 1;
let lessonCompleted = false;
let currentLanguageData = null;
let attemptCount = 0;
let maxAttempts = 3;

// Language data mapping
const languageMap = {
    html: window.htmlLessons,
    javascript: window.javascriptLessons,
    python: window.pythonLessons,
    java: window.javaLessons
};

function startLearning(language) {
    selectedLanguage = language;
    currentLanguageData = languageMap[language];
    
    if (!currentLanguageData) {
        console.error('Language data not found for:', language);
        return;
    }
    
    document.getElementById('languageSelection').style.display = 'none';
    document.getElementById('learningInterface').style.display = 'flex';
    
    document.getElementById('currentLanguage').textContent = currentLanguageData.name;
    loadLesson(1);
}

function goBackToSelection() {
    document.getElementById('languageSelection').style.display = 'flex';
    document.getElementById('learningInterface').style.display = 'none';
    selectedLanguage = null;
    currentLanguageData = null;
    currentLesson = 1;
    lessonCompleted = false;
    attemptCount = 0;
}

// BUG FIX 1: Show only required tags for current lesson
function updateQuickInsertButtons() {
    const tagButtons = document.getElementById('tagButtons');
    const lesson = currentLanguageData.lessons[currentLesson - 1];
    
    // Use requiredTags from lesson data instead of generic tags
    const requiredTags = lesson.task.requiredTags || [];
    
    tagButtons.innerHTML = '';
    requiredTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-btn';
        button.textContent = tag;
        button.onclick = () => insertText(tag);
        tagButtons.appendChild(button);
    });
}

function updateWordButtons(words) {
    const wordButtons = document.getElementById('wordButtons');
    wordButtons.innerHTML = '';
    if (words && words.length > 0) {
        words.forEach(word => {
            const button = document.createElement('button');
            button.className = 'word-btn';
            button.textContent = word.trim();
            button.onclick = () => insertText(word);
            wordButtons.appendChild(button);
        });
    }
}

// BUG FIX 3: Fix spacing issues based on language rules - IMPROVED HTML SPACING
function insertText(text) {
    const codeInput = document.getElementById('codeInput');
    const cursorPos = codeInput.selectionStart;
    const textBefore = codeInput.value.substring(0, cursorPos);
    const textAfter = codeInput.value.substring(codeInput.selectionEnd);
    
    let finalText = text;
    
    // Apply language-specific spacing rules
    if (selectedLanguage === 'html') {
        // HTML STRICT RULE: NO SPACES between tags and content
        if (text.startsWith('<') && !text.startsWith('</')) {
            // Opening tag - check if there's content after cursor that starts with space
            const nextChar = textAfter.charAt(0);
            if (nextChar === ' ') {
                // Remove the space after opening tag
                codeInput.value = textBefore + finalText + textAfter.substring(1);
            } else {
                codeInput.value = textBefore + finalText + textAfter;
            }
        } else if (text.startsWith('</')) {
            // Closing tag - check if there's space before cursor
            const prevChar = textBefore.charAt(textBefore.length - 1);
            if (prevChar === ' ') {
                // Remove the space before closing tag
                codeInput.value = textBefore.substring(0, textBefore.length - 1) + finalText + textAfter;
            } else {
                codeInput.value = textBefore + finalText + textAfter;
            }
        } else {
            // Regular text/words - normal insertion
            codeInput.value = textBefore + finalText + textAfter;
        }
        
        // Set cursor position based on whether space was removed
        let newCursorPos;
        if (text.startsWith('</') && textBefore.charAt(textBefore.length - 1) === ' ') {
            newCursorPos = cursorPos - 1 + finalText.length;
        } else if (text.startsWith('<') && !text.startsWith('</') && textAfter.charAt(0) === ' ') {
            newCursorPos = cursorPos + finalText.length;
        } else {
            newCursorPos = cursorPos + finalText.length;
        }
        
        codeInput.focus();
        codeInput.setSelectionRange(newCursorPos, newCursorPos);
        return;
        
    } else if (selectedLanguage === 'javascript') {
        // JavaScript rules: proper spacing for syntax
        if (text === '=' && textBefore.charAt(textBefore.length - 1) !== ' ') {
            finalText = ' ' + text + ' ';
        } else if (text === ';') {
            finalText = text; // No space before semicolon
        } else if (text === '"' || text === '(' || text === ')') {
            finalText = text; // No extra space for quotes and parentheses
        } else {
            finalText = text;
        }
    } else if (selectedLanguage === 'python') {
        // Python rules: proper spacing
        if (text === '=' && textBefore.charAt(textBefore.length - 1) !== ' ') {
            finalText = ' ' + text + ' ';
        } else if (text === '"' || text === '(' || text === ')') {
            finalText = text;
        } else {
            finalText = text;
        }
    } else if (selectedLanguage === 'java') {
        // Java rules: proper spacing for syntax
        if (text === '=' && textBefore.charAt(textBefore.length - 1) !== ' ') {
            finalText = ' ' + text + ' ';
        } else if (text === ';' || text === '"' || text === '(' || text === ')') {
            finalText = text;
        } else {
            finalText = text;
        }
    }
    
    // For non-HTML languages, use standard insertion
    codeInput.value = textBefore + finalText + textAfter;
    codeInput.focus();
    codeInput.setSelectionRange(cursorPos + finalText.length, cursorPos + finalText.length);
}

function loadLesson(lessonIndex) {
    const lessons = currentLanguageData.lessons;
    const lesson = lessons[lessonIndex - 1];
    if (!lesson) return;

    currentLesson = lessonIndex;
    attemptCount = 0;
    lessonCompleted = false;
    
    // Update lesson display
    document.getElementById('lessonNumber').textContent = `Lesson ${lesson.number}`;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonDescription').textContent = lesson.description;
    document.getElementById('lessonCounter').textContent = `Lesson ${lessonIndex} of ${lessons.length}`;
    
    // Update concept section
    document.getElementById('conceptTitle').textContent = lesson.concept.title;
    document.getElementById('conceptText').innerHTML = lesson.concept.text;
    document.getElementById('codeExample').innerHTML = lesson.concept.example;
    
    // Update task section
    document.getElementById('taskTitle').textContent = lesson.task.title;
    document.getElementById('taskDescription').textContent = lesson.task.description;
    document.getElementById('hint').innerHTML = lesson.task.hint;
    
    // Update buttons with lesson-specific data
    updateQuickInsertButtons();
    updateWordButtons(lesson.task.wordButtons);
    
    // Reset interface
    document.getElementById('codeInput').value = '';
    document.getElementById('codeInput').className = 'code-input';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('previewSection').style.display = 'none';
    
    // Hide skip button initially
    const skipBtn = document.getElementById('skipBtn');
    if (skipBtn) {
        skipBtn.style.display = 'none';
    }
    
    // Reset try counter
    const tryCounter = document.getElementById('tryCounter');
    if (tryCounter) {
        tryCounter.textContent = '';
    }
    
    updateNavigation();
}

// BUG FIX 2: Only show preview when code has valid structure
function hasValidStructure(userCode) {
    if (selectedLanguage === 'html') {
        // Check for basic HTML tag structure
        const tagPattern = /<[^>]+>/;
        return tagPattern.test(userCode);
    } else if (selectedLanguage === 'javascript') {
        // Check for JavaScript patterns
        return userCode.includes('console.log') || 
               userCode.includes('let ') || 
               userCode.includes('const ') ||
               userCode.includes('function');
    } else if (selectedLanguage === 'python') {
        // Check for Python patterns
        return userCode.includes('print(') || 
               userCode.includes('=') ||
               userCode.includes('def ');
    } else if (selectedLanguage === 'java') {
        // Check for Java patterns
        return userCode.includes('System.out.println') || 
               userCode.includes('String ') ||
               userCode.includes('int ') ||
               userCode.includes('public static');
    }
    return false;
}

// BUG FIX 4: Combined show preview and check answer functionality
function showPreview() {
    const userCode = document.getElementById('codeInput').value.trim();
    const previewSection = document.getElementById('previewSection');
    const previewContent = document.getElementById('previewContent');
    const feedback = document.getElementById('feedback');
    const codeInput = document.getElementById('codeInput');
    
    if (!userCode) {
        alert('Please write some code first!');
        return;
    }

    // BUG FIX 2: Only show preview if code has valid structure
    if (!hasValidStructure(userCode)) {
        alert('Please write valid code structure first!');
        return;
    }

    // Show preview
    previewSection.style.display = 'block';
    
    if (selectedLanguage === 'html') {
        previewContent.innerHTML = userCode;
        previewContent.className = 'preview-content';
    } else {
        previewContent.className = 'console-output';
        
        if (selectedLanguage === 'javascript') {
            handleJavaScriptPreview(userCode, previewContent);
        } else if (selectedLanguage === 'python') {
            handlePythonPreview(userCode, previewContent);
        } else if (selectedLanguage === 'java') {
            handleJavaPreview(userCode, previewContent);
        }
    }

    // Check answer automatically when showing preview
    checkAnswerLogic();
}

// BUG FIX 4: Separate answer checking logic
function checkAnswerLogic() {
    const userAnswer = document.getElementById('codeInput').value.trim();
    const feedback = document.getElementById('feedback');
    const codeInput = document.getElementById('codeInput');
    
    let isCorrect = false;
    
    // BUG FIX 7: Improved validation logic for each language
    if (selectedLanguage === 'html') {
        isCorrect = checkHTMLAnswer(userAnswer);
    } else if (selectedLanguage === 'javascript') {
        isCorrect = checkJavaScriptAnswer(userAnswer);
    } else if (selectedLanguage === 'python') {
        isCorrect = checkPythonAnswer(userAnswer);
    } else if (selectedLanguage === 'java') {
        isCorrect = checkJavaAnswer(userAnswer);
    }

    if (isCorrect) {
        feedback.innerHTML = 'Excellent! You got it right! Check the preview above to see how your code works.';
        feedback.className = 'feedback success';
        feedback.style.display = 'block';
        
        codeInput.className = 'code-input correct';
        lessonCompleted = true;
        
        // BUG FIX 5: Handle navigation properly
        updateNavigation();
    } else {
        attemptCount++;
        
        // Update try counter
        const tryCounter = document.getElementById('tryCounter');
        if (tryCounter) {
            tryCounter.textContent = `Attempts: ${attemptCount}/${maxAttempts}`;
        }
        
        feedback.innerHTML = 'Not quite right yet. Keep trying! Make sure your code structure matches the expected format.';
        feedback.className = 'feedback error';
        feedback.style.display = 'block';
        
        codeInput.className = 'code-input incorrect';
        
        // BUG FIX 6: Show skip button after max attempts
        if (attemptCount >= maxAttempts) {
            const skipBtn = document.getElementById('skipBtn');
            if (skipBtn) {
                skipBtn.style.display = 'inline-block';
            }
        }
        
        // Reset visual feedback after 3 seconds
        setTimeout(() => {
            codeInput.className = 'code-input';
            feedback.style.display = 'none';
        }, 3000);
    }
}

// BUG FIX 8: Improved HTML validation - focus on structure, not exact content
function checkHTMLAnswer(userAnswer) {
    const lesson = currentLanguageData.lessons[currentLesson - 1];
    
    // Check for proper HTML tag structure
    if (lesson.number === 1) { // Heading lesson
        const headingPattern = /<(h[1-6])>(.+?)<\/\1>/i;
        return headingPattern.test(userAnswer);
    } else if (lesson.number === 2) { // Paragraph lesson
        const paragraphPattern = /<p>(.+?)<\/p>/i;
        return paragraphPattern.test(userAnswer);
    }
    
    return false;
}

// BUG FIX 7: Improved JavaScript validation
function checkJavaScriptAnswer(userAnswer) {
    const lesson = currentLanguageData.lessons[currentLesson - 1];
    
    if (lesson.number === 1) { // Variable lesson
        const variablePattern = /(let|const)\s+\w+\s*=\s*[^;]+;/i;
        return variablePattern.test(userAnswer);
    } else if (lesson.number === 2) { // Console.log lesson
        const consolePattern = /console\.log\s*\(\s*[^)]+\s*\)\s*;/i;
        return consolePattern.test(userAnswer);
    }
    
    return false;
}

// BUG FIX 7: Improved Python validation
function checkPythonAnswer(userAnswer) {
    const lesson = currentLanguageData.lessons[currentLesson - 1];
    
    if (lesson.number === 1) { // Variable lesson
        const variablePattern = /\w+\s*=\s*.+/i;
        return variablePattern.test(userAnswer);
    } else if (lesson.number === 2) { // Print lesson
        const printPattern = /print\s*\(\s*[^)]+\s*\)/i;
        return printPattern.test(userAnswer);
    }
    
    return false;
}

// BUG FIX 7: Improved Java validation
function checkJavaAnswer(userAnswer) {
    const lesson = currentLanguageData.lessons[currentLesson - 1];
    
    if (lesson.number === 1) { // Variable lesson
        const variablePattern = /(String|int|double)\s+\w+\s*=\s*[^;]+;/i;
        return variablePattern.test(userAnswer);
    } else if (lesson.number === 2) { // System.out.println lesson
        const printPattern = /System\.out\.println\s*\(\s*[^)]+\s*\)\s*;/i;
        return printPattern.test(userAnswer);
    }
    
    return false;
}

function handleJavaScriptPreview(userCode, previewContent) {
    try {
        if (userCode.includes('console.log')) {
            const matches = userCode.match(/console\.log\s*\(\s*["']([^"']+)["']\s*\)/g);
            if (matches) {
                let output = '';
                matches.forEach(match => {
                    const text = match.match(/["']([^"']+)["']/)[1];
                    output += text + '\n';
                });
                previewContent.textContent = output;
            } else {
                previewContent.textContent = '> ' + userCode;
            }
        } else {
            previewContent.textContent = '> ' + userCode;
        }
    } catch (e) {
        previewContent.textContent = 'Error in code';
    }
}

function handlePythonPreview(userCode, previewContent) {
    try {
        if (userCode.includes('print(')) {
            const matches = userCode.match(/print\s*\(\s*["']([^"']+)["']\s*\)/g);
            if (matches) {
                let output = '';
                matches.forEach(match => {
                    const text = match.match(/["']([^"']+)["']/)[1];
                    output += text + '\n';
                });
                previewContent.textContent = output;
            } else {
                previewContent.textContent = '>>> ' + userCode;
            }
        } else {
            previewContent.textContent = '>>> ' + userCode;
        }
    } catch (e) {
        previewContent.textContent = 'Error in code';
    }
}

function handleJavaPreview(userCode, previewContent) {
    try {
        if (userCode.includes('System.out.println')) {
            const matches = userCode.match(/System\.out\.println\s*\(\s*["']([^"']+)["']\s*\)/g);
            if (matches) {
                let output = '';
                matches.forEach(match => {
                    const text = match.match(/["']([^"']+)["']/)[1];
                    output += text + '\n';
                });
                previewContent.textContent = output;
            } else {
                previewContent.textContent = userCode;
            }
        } else {
            previewContent.textContent = userCode;
        }
    } catch (e) {
        previewContent.textContent = 'Error in code';
    }
}

// BUG FIX 6: Skip lesson functionality
function skipLesson() {
    lessonCompleted = true;
    attemptCount = 0;
    
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = 'Lesson skipped! Moving to next lesson.';
    feedback.className = 'feedback';
    feedback.style.display = 'block';
    feedback.style.background = '#444444';
    feedback.style.borderColor = '#666666';
    feedback.style.color = '#cccccc';
    
    const skipBtn = document.getElementById('skipBtn');
    if (skipBtn) {
        skipBtn.style.display = 'none';
    }
    
    updateNavigation();
    
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 2000);
}

function toggleHint() {
    const hint = document.getElementById('hint');
    hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
}

function nextLesson() {
    const totalLessons = currentLanguageData.lessons.length;
    if (lessonCompleted && currentLesson < totalLessons) {
        loadLesson(currentLesson + 1);
    }
}

function previousLesson() {
    if (currentLesson > 1) {
        loadLesson(currentLesson - 1);
        lessonCompleted = true;
        updateNavigation();
    }
}

// BUG FIX 5: Improved navigation handling
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalLessons = currentLanguageData.lessons.length;
    
    // Previous button
    prevBtn.disabled = currentLesson === 1;
    
    // Next button logic
    if (currentLesson === totalLessons) {
        // Last lesson
        if (lessonCompleted) {
            nextBtn.textContent = 'Course Complete!';
            nextBtn.disabled = true;
            nextBtn.style.background = '#4CAF50';
            nextBtn.style.color = 'white';
        } else {
            nextBtn.textContent = 'Next';
            nextBtn.disabled = true;
        }
    } else {
        // Not last lesson
        nextBtn.textContent = 'Next';
        nextBtn.disabled = !lessonCompleted;
        nextBtn.style.background = lessonCompleted ? '#666666' : '#333333';
        nextBtn.style.color = lessonCompleted ? 'white' : '#666666';
    }
}