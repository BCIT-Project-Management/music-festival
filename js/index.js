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

        // run script
        runScripts(app);

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
        if (path !== "/no-content") await render("/no-content");
    }
}

const navigate = (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        const path = e.target.getAttribute("href");
        window.history.pushState({}, "", path);
        render(path);
    }
    if (e.target.matches("[drop-menu]")) {
        e.preventDefault();
        const dropDownId = e.target.id + "-drop";
        const dropDown = document.querySelector(`#${dropDownId}`);
        dropDown.style.opacity = "100%";
        dropDown.style.display = "";
    } else {
        hideDropDown();
    }
}

const hideDropDown = () => {
    const dropMenus = document.querySelectorAll(".drop-down");
    for (const dropDown of dropMenus) {
            dropDown.style.opacity = "0%";
            dropDown.style.display = "none";
    }
}

const runScripts = (container) => {
    const scripts = container.querySelectorAll("script");

    scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
            newScript.src = oldScript.src;
            newScript.async = true;
        } else {
            newScript.textContent = oldScript.textContent;
        }

        document.body.appendChild(newScript);
        oldScript.remove();
    });
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
    hideDropDown();
});

window.addEventListener("popstate", () => {
    render(window.location.pathname);
});