const themes = [
  {
    name: "dark",
    message: "In the darkest night",
  },
  {
    name: "light",
    message: "In the brightest day",
  },
];

const setTheme = (theme) => {
  document.body.className = "";
  document.body.classList.add(`theme-${theme.name}`);
};

const updateStatus = (theme) => {
  const status = document.getElementById("status");
  status.textContent = theme.message;
};

document.addEventListener("DOMContentLoaded", () => {
  themes.forEach((theme) => {
    const button = document.getElementById(`theme-${theme.name}`);

    if (button) {
      button.addEventListener("click", () => {
        setTheme(theme);
        updateStatus(theme);
        closeMenu();
      });
    }
  });
});

const toggleButton = document.getElementById("theme-switcher-button");
const menu = document.getElementById("theme-dropdown");

toggleButton.addEventListener("click", () => {
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
});

function openMenu() {
  menu.removeAttribute("hidden");
  toggleButton.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  menu.setAttribute("hidden", "");
  toggleButton.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (e) => {
  if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
    closeMenu();
  }
});
