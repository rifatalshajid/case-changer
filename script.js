// Convert to Uppercase
function convertToUpper() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = inputText.toUpperCase();
    updateStats();
}

// Convert to Lowercase
function convertToLower() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = inputText.toLowerCase();
    updateStats();
}

// Convert to Title Case
function convertToTitle() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    document.getElementById('outputText').value = outputText;
    updateStats();
}

// Convert to Sentence Case
function convertToSentence() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
    document.getElementById('outputText').value = outputText;
    updateStats();
}

// Convert to Capitalized Case
function convertToCapitalized() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/\b\w/g, l => l.toUpperCase());
    document.getElementById('outputText').value = outputText;
    updateStats();
}

// Convert to Alternating Case
function convertToAlternating() {
    const inputText = document.getElementById('inputText').value;
    let newText = '';
    for (let i = 0; i < inputText.length; i++) {
        newText += i % 2 === 0 ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
    }
    document.getElementById('outputText').value = newText;
    updateStats();
}

// Convert to Inverse Case
function convertToInverse() {
    const inputText = document.getElementById('inputText').value;
    let newText = '';
    for (let i = 0; i < inputText.length; i++) {
        newText += inputText[i] === inputText[i].toUpperCase() ? inputText[i].toLowerCase() : inputText[i].toUpperCase();
    }
    document.getElementById('outputText').value = newText;
    updateStats();
}

// Download Text
function downloadText() {
    const text = document.getElementById('outputText').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'converted_text.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none'; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

// Copy to Clipboard
function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Copied to clipboard');
}

// Clear Text
function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
    updateStats();
}

// Update Stats
function updateStats() {
    const outputText = document.getElementById('outputText').value;
    document.getElementById('charCount').innerText = outputText.length;
    document.getElementById('wordCount').innerText = outputText.split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('sentenceCount').innerText = outputText.split(/[.!?]/).filter(sentence => sentence.length > 0).length;
    document.getElementById('lineCount').innerText = outputText.split(/\n/).length;
}

// Event Listeners for Real-time Stats Update
document.getElementById('inputText').addEventListener('input', updateStats);
document.getElementById('outputText').addEventListener('input', updateStats);
