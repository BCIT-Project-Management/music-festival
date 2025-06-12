const getRoute = (path) => {
    const cleanPath = path === "/" ? "home" : path.split("/")[1];

    return {
        html: `pages/${cleanPath.toLowerCase()}.html`,
        css: `css/${cleanPath.toLowerCase()}.css`
    };
}

async function checkFileExists(url) {
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (error) {
        return false;
    }
}

const render = async (path) => {
    const app = document.getElementById("app");
    const file = getRoute(path);

    try {

        app.style.display = "none";
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

        if (!await checkFileExists(file.css)) return;
        const link = document.createElement("link");
        link.href = file.css;
        link.rel = "stylesheet";
        link.id = styleId;
        document.head.appendChild(link);

        await setTimeout(() => {
            app.style.display = "block";
        }, 100);

    } catch (err) {
        await render("/no-content");
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
    else {
        render(window.location.pathname);
    }
    document.body.addEventListener("click", navigate);
});

window.addEventListener("popstate", () => {
    render(window.location.pathname);
});