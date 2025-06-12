const routes = {
    "/": {html: "pages/home.html", css:"css/home.css"},
    "/Music": {html: "pages/music.html", css:"css/music.css"},
}

const render = async (path) => {
    const app = document.getElementById("app");
    const file = routes[path] || {html: "pages/404.html", css: ""};

    try {
        // load html
        const res = await fetch(file.html);
        if (!res.ok) throw new Error("Page not found");
        const html = await res.text();
        app.innerHTML = html;

        // load css
        const styleId = "page-style";
        const oldStyle = document.getElementById(styleId);
        if (oldStyle) {
            oldStyle.remove();
        }

        if (!file.css) return;
        const link = document.createElement("link");
        link.href = file.css;
        link.rel = "stylesheet";
        link.id = styleId;
        document.head.appendChild(link);
    
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
    const redirectUrl = sessionStorage.redirect;

    if (redirectUrl) {
        sessionStorage.redirect = null;
        const relative = redirectUrl.split("/")[1] || "/";
        history.replaceState(null, "", relative);
        render(relative);
    }
    else
    {
        render(window.location.pathname);
    }
    document.body.addEventListener("click", navigate);
});

window.addEventListener("popstate", () => {
    render(window.location.pathname);
});