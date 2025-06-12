let routes = {
    "/": "pages/home.html",
    "/Music": "pages/music.html"
}

const render = async (path) => {
    const app = document.getElementById("app");
    const file = routes[path] || "pages/404.html";

    try {
        const res = await fetch(file);
        if (!res.ok) throw new Error("Page not found");
        const html = await res.text();
        app.innerHTML = html;
    } catch (err) {
        app.innerHTML = "<h1>404 - Page not found</h1>";
    }
}

const navigate = (e) => {
    if (!e.target.matches("[data-link]")) return;

    e.preventDefault();
    const path = e.target.getAttribute("href");
    window.history.pushState({}, "", path);
    render(path);
}

window.addEventListener("DOMContentLoaded", () => {
    render("/");
    document.body.addEventListener("click", navigate);
});

window.addEventListener("popstate", () => {
    render(window.location.pathname);
});