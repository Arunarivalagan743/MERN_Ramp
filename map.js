// Helper to update output area
function setOutput(html) {
    const el = document.getElementById('output');
    if (!el) {
        console.log('[output]', html);
        return;
    }
    el.innerHTML = typeof html === 'string' ? html : String(html);
}

// Demo dataset
const arr = [1, 2, 3, 4, 5];

// Button handlers used by index.html
function showMapExample() {
    const doubled = arr.map(n => n * 2);
    setOutput(`<strong>map:</strong> [${arr.join(', ')}] -> [${doubled.join(', ')}]`);
}

function showFilterExample() {
    const odds = arr.filter(n => n % 2 !== 0);
    setOutput(`<strong>filter (odd):</strong> [${arr.join(', ')}] -> [${odds.join(', ')}]`);
}

function showReduceExample() {
    const sum = arr.reduce((acc, n) => acc + n, 0);
    setOutput(`<strong>reduce (sum):</strong> [${arr.join(', ')}] -> ${sum}`);
}

async function fetchUsers() {
    try {
        setOutput('Loading users...');
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        const list = data.map(u => `<li>${u.name}</li>`).join('');
        setOutput(`<strong>Users:</strong><ul style="margin-top:8px; padding-left:18px;">${list}</ul>`);
    } catch (err) {
        setOutput(`<span style="color:#dc2626">Failed to load users: ${err.message}</span>`);
    }
}

// Keep a tiny example of template literals (for learning reference)
const name = 'harish';
const age = 20;
console.log(`My name is ${name} and my age is ${age}`);