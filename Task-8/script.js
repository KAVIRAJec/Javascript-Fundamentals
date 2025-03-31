 const content = document.querySelector(".content")

async function loadContent() {
    const hash = window.location.hash.slice(1) || "home";

    try {
        const response = await fetch(`${hash}.html`)
    if (!response.ok) {
        throw new Error(`Failed to fetch ${hash}.html`);
    }
        const htmlContent = await response.text();
        document.title = hash.charAt(0).toUpperCase() + hash.slice(1);
        content.innerHTML = htmlContent;
    } catch (error) {
        console.error(error);
        document.title = "Error";
        content.innerHTML = "<h1>Error loading content</h1>";
    }
}

window.addEventListener("hashchange", loadContent);
window.addEventListener("DOMContentLoaded", loadContent);