export default function createBtn() {
    function saveTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }

    function toggleTheme() {
        const current = document.body.className;
        const next = current === "black" ? "light" : "black";
        saveTheme(next);
        updateButtonStyle(next);
    }

    function updateButtonStyle(theme) {
        if (!btnBW) return;
        if (theme === "black") {
            btnBW.style.background = "var(--color-black)";
            btnBW.style.color = "var(--bg-light)";
            btnBW.style.boxShadow = "10px 10px var(--bg-light)";
        } else {
            btnBW.style.background = "var(--bg-light)";
            btnBW.style.color = "var(--bg-dark)";
            btnBW.style.boxShadow = "10px 10px var(--bg-dark)";
        }
    }

    const container = document.createElement('div');
    container.className = 'button';

    const btnBW = document.createElement('button');
    btnBW.className = 'theme-toggle';
    btnBW.id = 'btnBW';
    btnBW.textContent = 'Black/White';

    Object.assign(btnBW.style, {
        display: "flex",
        marginTop: "50px",
        marginLeft: "20px",
        padding: "5px",
        border: "none",
        borderRadius: "5px",
        background: "var(--bg-light)",
        cursor: "pointer",
        scale: "1.5",
        color: "var(--color-black)",
        fontWeight: "bold",
        boxShadow: "10px 10px var(--color-black)"
    });

    btnBW.addEventListener('click', toggleTheme);

    const button = document.getElementById('boutton')

    container.appendChild(btnBW);

    document.body.prepend(container)

    window.onload = () => {
        const savedTheme = localStorage.getItem("theme") || "light";
        saveTheme(savedTheme);
        updateButtonStyle(savedTheme);
    };

    return container;
}