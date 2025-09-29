
(function () {
  const toggle = document.getElementById("theme-toggle");

  // Load saved preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Animation effect when toggled
    toggle.style.transform = "rotate(360deg) scale(1.2)";
    setTimeout(() => {
      toggle.style.transform = "";
    }, 400);
  });
})();
