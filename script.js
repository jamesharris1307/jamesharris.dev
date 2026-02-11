const moon_button = document.getElementById('Moon_Button');
const sun_button = document.getElementById('Sun_Button');
const root = document.documentElement;

function setDark() {
    root.style.setProperty('--bg-main', '#0f0f0f');
    root.style.setProperty('--bg-alt', '#151515');
    root.style.setProperty('--bg-sidebar', '#121212');
    root.style.setProperty('--text-main', '#eaeaea');
    root.style.setProperty('--border-color', '#222');
    localStorage.setItem('theme', 'dark');
}

function setLight() {
    root.style.setProperty('--bg-main', '#f4f4f4');
    root.style.setProperty('--bg-alt', '#ffffff');
    root.style.setProperty('--bg-sidebar', '#e0e0e0');
    root.style.setProperty('--text-main', '#1a1a1a');
    root.style.setProperty('--border-color', '#ccc');
    localStorage.setItem('theme', 'light');
}

moon_button.addEventListener('click', setDark);
sun_button.addEventListener('click', setLight);

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    setLight();
} else {
    setDark();
}

async function loadBlogPosts() {
    const container = document.getElementById('Blog_Container');
    if (!container) return;

    try {
        const response = await fetch('./posts.json');
        
        if (!response.ok) throw new Error("posts.json not found");

        const text = await response.text();
        
        if (!text || text.trim() === "" || text.trim() === "[]") {
            container.innerHTML = "<p>No thoughts posted yet.</p>";
            return;
        }

        const posts = JSON.parse(text);
        container.innerHTML = ''; 

        for (const post of posts) {
            const mdResponse = await fetch(`./posts/${post.filename}`);
            const mdText = await mdResponse.text();
            
            const postDiv = document.createElement('div');
            postDiv.className = 'Blog_Post_Container';
            postDiv.innerHTML = marked.parse(mdText);
            container.appendChild(postDiv);
        }
    } catch (error) {
        container.innerHTML = "<p>Waiting for thoughts to be published...</p>";
        console.error("Fetch error:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadBlogPosts);